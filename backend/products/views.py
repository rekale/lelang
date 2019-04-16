from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product
from django.utils import timezone

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    now = timezone.now()
    queryset = Product.objects.filter(auction_start_at__lte=now, auction_end_at__gte=now).order_by('-id')
    serializer_class = ProductSerializer
