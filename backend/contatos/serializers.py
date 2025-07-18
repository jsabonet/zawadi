from rest_framework import serializers
from .models import MensagemContato

class MensagemContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MensagemContato
        fields = '__all__'
