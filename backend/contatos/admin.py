from django.contrib import admin
from .models import MensagemContato

@admin.register(MensagemContato)
class MensagemContatoAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'message', 'data_envio')
    search_fields = ('name', 'email')
