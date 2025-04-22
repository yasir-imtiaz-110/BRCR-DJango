
# Create your views here.

# from django.shortcuts import render
# from django.http import HttpResponse

# def course_django(request):
#     return HttpResponse('I am django course')

# def course_python(request):
#     return HttpResponse('I am python course' )
from rest_framework.response import Response
from rest_framework import generics, status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import RegisterSerializer, LoginSerializer, UserSerializer
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from bluerosecarrental import serialize
from authentication.models import users
from bluerosecarrental.serialize import UserSerializer
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404


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

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    print("RegisterView reached!")

    # def create(self, request, *args, **kwargs):
    #     print(" RegisterView reached!")  # This will print in the terminal
    #     return super().create(request, *args, **kwargs)
    

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    def get(self, request):
        return Response(self.serializer_class(request.user).data)