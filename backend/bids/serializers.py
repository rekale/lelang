from .models import Bid, BidOption
from rest_framework import serializers


class BidSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bid
        fields = ('user', 'product', 'offering_price', 'tokopoints_deducted', 'created_at', 'updated_at')


class BidOptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BidOption
        fields = ('product', 'price_increment', 'created_at', 'updated_at')
