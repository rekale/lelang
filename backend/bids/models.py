from django.db import models
from django.contrib.auth.models import User
from products.models import Product


class Bid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    offering_price = models.FloatField()
    tokopoints_deducted = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BidOptions(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price_increment = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
