"""Transcribe un directo largo por ventanas, sin cargarlo entero en memoria.

El script original leia el fichero de una vez: con ocho horas de audio eso son
siete gigas de RAM antes de escribir el primer segmento. Aqui se decodifica con
PyAV en ventanas de minutos, se transcribe cada una con su desfase y se escribe
al vuelo, asi que la memoria se queda en la ventana y una interrupcion solo
cuesta el tramo en curso.

Uso: transcribe_por_tramos.py <media> <salida.jsonl> [modelo] [hilos] [minutos]
"""
import json
import os
import sys

import av
import numpy as np
from faster_whisper import WhisperModel

TASA = 16000

media = sys.argv[1]
salida = sys.argv[2]
modelo = sys.argv[3] if len(sys.argv) > 3 else "distil-large-v3"
hilos = int(sys.argv[4]) if len(sys.argv) > 4 else 7
minutos = float(sys.argv[5]) if len(sys.argv) > 5 else 20.0

ventana = int(minutos * 60 * TASA)

# Reanudar: si ya hay segmentos escritos, se sigue desde el ultimo final.
desde = 0.0
if os.path.exists(salida):
    with open(salida) as f:
        for linea in f:
            try:
                desde = max(desde, json.loads(linea)["end"])
            except Exception:
                pass
    if desde:
        print(f"reanudo en {desde / 3600:.2f} h", flush=True)

m = WhisperModel(modelo, device="cpu", compute_type="int8", cpu_threads=hilos, download_root="/models")

contenedor = av.open(media)
pista = contenedor.streams.audio[0]
remuestreo = av.audio.resampler.AudioResampler(format="flt", layout="mono", rate=TASA)

buffer = np.empty(0, dtype=np.float32)
muestras_vistas = 0
escritos = 0

with open(salida, "a") as f:
    def transcribir(bloque, inicio_s):
        global escritos
        segs, _ = m.transcribe(
            bloque,
            language="en",
            vad_filter=True,
            beam_size=1,
            vad_parameters={"min_silence_duration_ms": 700},
        )
        for s in segs:
            f.write(json.dumps({
                "start": round(s.start + inicio_s, 2),
                "end": round(s.end + inicio_s, 2),
                "text": s.text.strip(),
            }, ensure_ascii=False) + "\n")
            escritos += 1
        f.flush()
        print(f"{(inicio_s + len(bloque) / TASA) / 3600:.2f} h transcritas · {escritos} segmentos", flush=True)

    for cuadro in contenedor.decode(pista):
        for salida_cuadro in remuestreo.resample(cuadro):
            muestras = salida_cuadro.to_ndarray().reshape(-1).astype(np.float32)
            buffer = np.concatenate((buffer, muestras))
            while len(buffer) >= ventana:
                inicio_s = muestras_vistas / TASA
                bloque, buffer = buffer[:ventana], buffer[ventana:]
                muestras_vistas += ventana
                if inicio_s + ventana / TASA > desde:
                    transcribir(bloque, inicio_s)

    if len(buffer):
        inicio_s = muestras_vistas / TASA
        if inicio_s + len(buffer) / TASA > desde:
            transcribir(buffer, inicio_s)

print("terminado", flush=True)
