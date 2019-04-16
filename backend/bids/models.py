from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from products.models import Product


class Bid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    offering_price = models.FloatField()
    tokopoints_deducted = models.FloatField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# Update Product's Bid_Current_Price when creating a new bid
@receiver(post_save, sender=Bid)
def save_bid_updates_current_price(sender, instance, created, **kwargs):
    if created:
        product = Product.objects.get(pk=instance.product_id)
        product.bid_current_price = instance.offering_price
        product.save()


class BidOption(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price_increment = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


