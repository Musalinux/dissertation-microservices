FROM python:3.8-slim
WORKDIR /app
COPY . /app
RUN pip install --trusted-host pypi.python.org Flask pymongo
EXPOSE 5000
CMD ["python", "app.py"]

