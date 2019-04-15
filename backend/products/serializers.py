from bids.models import Bid
from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    points_to_deduct = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'name', 'desc', 'price', 'bid_init_price', 'bid_current_price', 'image', 'points_to_deduct')

    def get_points_to_deduct(self, obj):
        return Bid.calculate_point(obj.bid_current_price)
