from rest_framework import serializers
from authentication.models import users
from vehicles.models import vehicles

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=users
        fields="__all__"

class VehiclesSerializer(serializers.ModelSerializer):
    class Meta:
        model=vehicles
        fields="__all__"