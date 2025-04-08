from django.shortcuts import render
from django.template import loader
from rest_framework.views import APIView
from bluerosecarrental.serialize import VehiclesSerializer
from rest_framework.response import Response
from django.http import HttpResponse
from vehicles.models import vehicles
from rest_framework.parsers import MultiPartParser, FormParser
from django.conf import settings
from rest_framework import status

# Create your views here.

class AddVehicle(APIView):
    base_url = settings.BASE_URL
    parser_classes = (MultiPartParser, FormParser)
    def post(self,request):
        if isinstance(request.data, list):
            serializeObj = VehiclesSerializer(data=request.data, many=True)
        else:
            serializeObj = VehiclesSerializer(data=request.data)
        
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)
    
def add(request):
    template = loader.get_template('add')
    return HttpResponse(template.render())

class VehiclesList(APIView):
    def get(self, request):
        vehiclesObj=vehicles.objects.all()
        VehiclesSerializeObj=VehiclesSerializer(vehiclesObj, many=True)
        return Response(VehiclesSerializeObj.data)
    
class DeleteVehicle(APIView):
    def post(self, request, pk):
        try:
            vehicleObj=vehicles.objects.get(pk=pk)
        except:
            return Response("No Record found in Database")
        
        vehicleObj.delete()
        return Response(200)

class GetVehicle(APIView):
    def get(self,request,pk):
        vehicleObj=vehicles.objects.get(pk=pk)
        serializedObj = VehiclesSerializer(vehicleObj)

        return Response(serializedObj.data, status=status.HTTP_200_OK)
        # if serializedObj.is_valid():
        # return Response(serializedObj.errors)


class UpdateVehicle(APIView):
    def post(self,request,pk):
        vehicleObj = vehicles.objects.get(pk=pk)
        serializedObj = VehiclesSerializer(vehicleObj,data=request.data)
        if serializedObj.is_valid():
            serializedObj.save()
            return Response(200)
        return Response(serializedObj.errors)
