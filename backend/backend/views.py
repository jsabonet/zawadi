import os
from django.http import HttpResponse, HttpResponseNotFound
from django.conf import settings

def index(request):
    try:
        # Caminho absoluto do index.html da build React
        path = os.path.join(settings.BASE_DIR, 'frontend_build', 'index.html')
        with open(path, encoding='utf-8') as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        return HttpResponseNotFound('Frontend not built yet.')
