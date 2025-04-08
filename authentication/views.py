
# Create your views here.

# from django.shortcuts import render
# from django.http import HttpResponse

# def course_django(request):
#     return HttpResponse('I am django course')

# def course_python(request):
#     return HttpResponse('I am python course' )

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from bluerosecarrental import serialize
from authentication.models import users
from bluerosecarrental.serialize import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status


def add(request):
    # return HttpResponse('I am django course')
#       template = loader.get_template('signup.html')
#   return HttpResponse(template.render())
    template = loader.get_template('signup.html')
    return HttpResponse(template.render())

class UsersList(APIView):
    def get(self,request):
        usersObj=users.objects.all()
        userSerializeObj=UserSerializer(usersObj, many=True)
        return Response(userSerializeObj.data)
    
    
class UsersAdd(APIView):
    def post(self,request):
        if isinstance(request.data, list):
            serializeObj = UserSerializer(data=request.data, many=True)
        else:
            serializeObj = UserSerializer(data=request.data)

        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)
    
class GetUser(APIView):
    def get(self, request, pk):
        userObj = get_object_or_404(users, pk=pk)
        userSerializeObj = UserSerializer(userObj)
        return Response(userSerializeObj.data, status=status.HTTP_200_OK)

class UsersUpdate(APIView):
    def post(self,request,pk):
        try:
            userObj=users.objects.get(pk=pk)
        except:
            return Response("Not found in Database")
     
        serializeObj = UserSerializer(userObj,data=request.data)

        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)


class UsersDelete(APIView):
    def post(self,request,pk):
        try:
            userObj=users.objects.get(pk=pk)
        except:
            return Response("Not found in Database")

        userObj.delete()
        return Response(200)
