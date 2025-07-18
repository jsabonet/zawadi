from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import MensagemContatoSerializer

class EnviarMensagemView(APIView):
    def post(self, request):
        serializer = MensagemContatoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Mensagem recebida com sucesso!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
