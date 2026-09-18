FROM python:3.12-slim
RUN pip install --no-cache-dir faster-whisper==1.1.1 requests
WORKDIR /work
COPY transcribe.py /app/transcribe.py
ENTRYPOINT ["python", "/app/transcribe.py"]
