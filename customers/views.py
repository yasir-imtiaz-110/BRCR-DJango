from django.template import loader
from django.http import HttpResponse
from rest_framework.views import APIView
from django.conf import settings
# from rest_framework.parsers import MultiPartParser, FormParser        # for form data
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from bluerosecarrental.serialize import CustomersSerializer
from rest_framework.response import Response
from .models import Customer
from rest_framework import status
from django.shortcuts import get_object_or_404

def add(request):
    # return HttpResponse('I am django course')
    # template = loader.get_template('signup.html')
    # return HttpResponse(template.render())
    template = loader.get_template('addcustomer.html')
    return HttpResponse(template.render())

class AddCustomers(APIView):
    base_url = settings.BASE_URL
    parser_classes = (JSONParser, MultiPartParser, FormParser)
    # parser_classes = (MultiPartParser, FormParser)           # for form data
    def post(self,request):
        if isinstance(request.data, list):
            serializeObj = CustomersSerializer(data=request.data, many=True)
        else:
            serializeObj = CustomersSerializer(data=request.data)
        
        if serializeObj.is_valid():
            serializeObj.save()
            return Response({"status": 200, "message": "Customer(s) added successfully"})
        return Response(serializeObj.errors, status=400)
    
class CustomersList(APIView):
    def get(self,request):
        customerObj=Customer.objects.all()
        serializedObj=CustomersSerializer(customerObj, many=True)
        return Response(serializedObj.data)

class CustomersUpdate(APIView):
    def post(self, request, pk):
        try:
            customerObj = Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)

        serializeObj = CustomersSerializer(customerObj, data=request.data)

        if serializeObj.is_valid():
            serializeObj.save()
            return Response(serializeObj.data, status=status.HTTP_200_OK)
        
        return Response(serializeObj.errors, status=status.HTTP_400_BAD_REQUEST)

class GetCustomer(APIView):
    def get(self, request, pk):
        customerObj = get_object_or_404(Customer, pk=pk)
        customerSerializedObj = CustomersSerializer(customerObj)
        return Response(customerSerializedObj.data, status=status.HTTP_200_OK)


class CustomerDelete(APIView):
    def post(self,request,pk):
        try:
            customerObj=Customer.objects.get(pk=pk)
        except:
            return Response("Not found in Database")

        customerObj.delete()
        return Response(200)