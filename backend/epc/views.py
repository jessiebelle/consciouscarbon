from django.shortcuts import render
from rest_framework import generics

from .models import EPCRating
from .serializers import EPCSerializer


class ListEPC(generics.ListCreateAPIView):
    queryset = EPCRating.objects.all()
    serializer_class = EPCSerializer


class DetailEPC(generics.RetrieveUpdateDestroyAPIView):
    queryset = EPCRating.objects.all()
    serializer_class = EPCSerializer
