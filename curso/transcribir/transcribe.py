# Transcribe el audio con marcas de tiempo y va escribiendo segmento a segmento,
# para que una interrupción no tire horas de trabajo.
import json, sys, time
from faster_whisper import WhisperModel

audio, salida, modelo = sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else "distil-large-v3"
hilos = int(sys.argv[4]) if len(sys.argv) > 4 else 7
desfase = float(sys.argv[5]) if len(sys.argv) > 5 else 0.0
m = WhisperModel(modelo, device="cpu", compute_type="int8", cpu_threads=hilos, download_root="/models")
segs, info = m.transcribe(audio, language="en", vad_filter=True, beam_size=1,
                          vad_parameters={"min_silence_duration_ms": 700})
print(f"idioma={info.language} duración={info.duration:.0f}s", flush=True)
inicio = time.time()
with open(salida, "w") as f:
    for s in segs:
        f.write(json.dumps({"start": round(s.start + desfase, 2), "end": round(s.end + desfase, 2), "text": s.text.strip()}, ensure_ascii=False) + "\n")
        f.flush()
        if int(s.end) % 1800 < 15:
            print(f"{(s.end+desfase)/3600:.2f} h de audio en {(time.time()-inicio)/60:.1f} min", flush=True)
print("terminado", flush=True)
