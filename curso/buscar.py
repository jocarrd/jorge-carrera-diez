import json, sys, re
patron = re.compile(sys.argv[1], re.I)
for line in open("datos/dia3/transcripcion.jsonl", encoding="utf-8"):
    try: d = json.loads(line)
    except: continue
    t = d.get("text", "")
    if patron.search(t):
        s = int(d.get("start", 0))
        print(f"{s//3600}:{s%3600//60:02d}:{s%60:02d}  {t.strip()[:120]}")
