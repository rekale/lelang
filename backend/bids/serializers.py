from .models import Bid, BidOption
from rest_framework import serializers


class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = ('user', 'product', 'offering_price', 'tokopoints_deducted', 'created_at', 'updated_at')

    def validate(self, attrs):
        self.validate_highest_bid(attrs['product'], attrs['offering_price'])
        return attrs

    # Validate if price is highest
    @staticmethod
    def validate_highest_bid(product_id, new_bid):
        try:
            highest_bid = Bid.objects.filter(product_id=product_id).order_by('-offering_price')[0]

            if new_bid <= highest_bid.offering_price:
                raise serializers.ValidationError("Maaf, sudah ada penawaran yang tinggi. Silahkan tawar lebih tinggi")
        except IndexError as highest_bid_not_found:
            print("No highest bid found")

    def create(self, validated_data):
        # Calculate tokopoints that needs to be deducted
        bid = Bid(**validated_data)
        bid.tokopoints_deducted = Bid.calculate_point(bid.offering_price)
        bid.save()

        return bid


class BidOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BidOption
        fields = ('product', 'price_increment', 'created_at', 'updated_at')
