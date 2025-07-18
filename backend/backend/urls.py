from django.contrib import admin
from django.urls import path
from contatos.views import EnviarMensagemView
from backend.views import index  # importe a view que criou
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('zawadi-admin-3921/', admin.site.urls),
    path('api/enviar-mensagem/', EnviarMensagemView.as_view()),

    # Essa rota serve a SPA React para todas as outras rotas
    path('', index, name='index'),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
