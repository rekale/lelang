from django.db import models
from django.utils import timezone


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
    
    def calculate_point(self):
        self.auction_start_at

    def get_deducted_point(self):
        now = timezone.now()
        data = self.productpoint_set.filter(start_at__lte=now,end_at__gte=now).order_by('-start_at').first()

        if data is None:
            return 0

        return data.amount
