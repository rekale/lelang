from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=20)
    desc = models.TextField()
    price = models.IntegerField(default=0)
    bid_init_price = models.IntegerField(default=0)
    bid_current_price = models.IntegerField(default=0)
    image = models.ImageField(upload_to='products')
    auction_start_at = models.DateTimeField(default=None, null=True)
    auction_end_at = models.DateTimeField(default=None, null=True)

    def __str__(self):
        return self.name