from .models import Point
from rest_framework import serializers


class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = ('user', 'total')