from django.shortcuts import render

# Create your views here.


'''
    Construção do ViewSet da api
        - queryset = Faz a busca no banco de dados, semelhante a um 'SELECT * FROM xtable'
        - serializer_class = recebe o serializes do serializer.py
        - filter_backends = Implementação de filtros do DRF
        - filterset_fields = Recebe uma lista dos campos que serão filtrados
        - search_fields = Recebe uma lista dos campos que serão filtrados no campo de search

'''
from rest_framework import viewsets
from api import serializer, models
from django_filters.rest_framework import DjangoFilterBackend

class AptoserializerViewSet(viewsets.ModelViewSet):
    queryset = models.AptoProj.objects.all()
    serializer_class = serializer.AptoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','story_id','data_apto', 'vlr_apto' ]
    