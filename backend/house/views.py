import os
from dotenv import load_dotenv
load_dotenv()

from decouple import config
import requests
from django.conf import settings

from rest_framework.decorators import action

from django import forms
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import views, viewsets
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render

from rest_framework import generics

from epc.helpers import create_epc_rating
from .models import House
from .serializers import HouseSerializer


class ListHouse(generics.ListCreateAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer


class DetailHouse(generics.RetrieveUpdateDestroyAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer


class HomeFinderView(APIView):
    postcode = forms.CharField(max_length=100)
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        postcode = request.query_params['postcode']
        # data = self.request_from_epc(postcode)
        endpoint = "https://epc.opendatacommunities.org/api/v1/domestic/search?postcode=" + str(request.query_params['postcode'])
        key = config("EPC_BASIC_KEY")
        key = os.environ.get("EPC_BASIC_KEY")
        headers = {"Authorization": f"Basic {key}",
                   "Accept": "application/json",
        }
        # response = HttpResponse()

        r = requests.get(endpoint, headers=headers)
        # epc_data = r.json()
        # create_epc_rating(data)
        return HttpResponse(r)

    @action(methods=['POST', 'GET'], url_path="postcode", url_name="postcode", detail=False)
    def request_from_epc(self, postcode, *args, **kwargs
    ):

        endpoint = "https://epc.opendatacommunities.org/api/v1/domestic/search?" + str(postcode)
        key = config("EPC_BASIC_KEY")
        headers = {"Authorization": str(key), "Accept": "application/json"}
        response = HttpResponse()

        r = requests.get(endpoint.format(headers=headers))
        return r
