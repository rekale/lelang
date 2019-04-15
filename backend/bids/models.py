from django.db import models
from django.contrib.auth.models import User


class Bid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    offering_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BidOptions(models.Model):
    price_increment = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # product = models.ForeignKey(Product, on_delete=models.CASCADE())
