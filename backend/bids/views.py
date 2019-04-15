from rest_framework import viewsets
from .serializers import BidSerializer, BidOptionSerializer
from .models import Bid, BidOption


class BidViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows bids to be viewed or edited.
    """
    queryset = Bid.objects.all().order_by('-id')
    serializer_class = BidSerializer


class BidOptionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows bid options to be viewed or edited.
    """
    queryset = BidOption.objects.all().order_by('-id')
    serializer_class = BidOptionSerializer
