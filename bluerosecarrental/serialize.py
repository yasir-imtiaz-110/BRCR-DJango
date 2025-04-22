from rest_framework import serializers
from authentication.models import users
from vehicles.models import vehicles
from customers.models import Customer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=users
        fields="__all__"

class VehiclesSerializer(serializers.ModelSerializer):
    class Meta:
        model=vehicles
        fields="__all__"

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model= Customer
        fields="__all__"