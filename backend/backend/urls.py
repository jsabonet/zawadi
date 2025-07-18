from django.contrib import admin
from django.urls import path
from contatos.views import EnviarMensagemView

urlpatterns = [
    path('zawadi-admin-3921/', admin.site.urls),  # URL personalizada
    path('api/enviar-mensagem/', EnviarMensagemView.as_view()),  # Endpoint do formulário
]
