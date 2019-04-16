from rest_framework import viewsets
from .serializers import PointSerializer
from .models import Point


class PointViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows points to be viewed or edited.
    """
    queryset = Point.objects.all().order_by('-id')
    serializer_class = PointSerializer
    filter_fields = ('user',)
