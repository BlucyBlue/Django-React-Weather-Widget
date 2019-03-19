FROM python:3.7

WORKDIR /app

COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt
RUN pip install psycopg2-binary

COPY . .

EXPOSE 8000

#CMD ["python", "manage.py", "runserver"]
CMD ["gunicorn", "weather.asgi:application", "-c", "gunicorn.py"]
