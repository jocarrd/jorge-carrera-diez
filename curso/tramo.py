import json, sys

inicio = float(sys.argv[1]) * 3600
fin = float(sys.argv[2]) * 3600
ruta = sys.argv[3] if len(sys.argv) > 3 else "datos/dia3/transcripcion.jsonl"

buf, ultimo = [], None
for line in open(ruta, encoding="utf-8"):
    try:
        d = json.loads(line)
    except Exception:
        continue
    s = d.get("start", 0)
    if s < inicio or s > fin:
        continue
    marca = int(s)
    if ultimo is None or marca - ultimo >= 60:
        buf.append(f"\n[{marca//3600}:{marca%3600//60:02d}:{marca%60:02d}]")
        ultimo = marca
    buf.append(d.get("text", "").strip())
print(" ".join(buf))
