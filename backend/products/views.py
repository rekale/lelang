from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product
from django.utils import timezone

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Product.objects.filter(auction_start_at__lte=timezone.now(), auction_end_at__gte=timezone.now()).order_by('-id')
    serializer_class = ProductSerializer