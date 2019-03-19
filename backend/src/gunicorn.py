workers = 2
timeout = 30
bind = '0.0.0.0:8000'
errorlog = accesslog = 'backend_django_app.log'
loglevel = 'debug'
preload_app = True
max_requests = 10
worker_class = 'uvicorn.workers.UvicornWorker'