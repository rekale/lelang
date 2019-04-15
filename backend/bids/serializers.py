from .models import Bid, BidOption
from rest_framework import serializers


class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = ('user', 'product', 'offering_price', 'tokopoints_deducted', 'created_at', 'updated_at')

    def create(self, validated_data):
        # Calculate tokopoints that needs to be deducted
        bid = Bid(**validated_data)
        bid.tokopoints_deducted = bid.calculate_point()
        bid.save()

        # TODO: Update user's tokopoints data

        return bid


class BidOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BidOption
        fields = ('product', 'price_increment', 'created_at', 'updated_at')
