from bids.models import Bid
from .models import Product
from rest_framework import serializers



class ProductSerializer(serializers.HyperlinkedModelSerializer):
    points_to_deduct = serializers.SerializerMethodField()
    bid_status_label = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'name', 'desc', 'price', 'bid_init_price', 'bid_current_price', 'image', 'points_to_deduct',
                  'auction_start_at', 'auction_end_at', 'bid_status_label')

    def get_points_to_deduct(self, obj):
        return obj.get_deducted_point()
       

    def get_bid_status_label(self, obj):
        bid_count = Bid.objects.filter(product_id=obj.id).count()
        if bid_count > 0:
            return "Telah ditawar"

        return "Ajukan lelang"