FROM python:3.8-slim
WORKDIR /app
COPY . .
RUN pip install Flask flask_cors
EXPOSE 5000
CMD ["python", "app.py"]

