from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=20)
    desc = models.TextField()
    price = models.IntegerField(default=0)
    bid_init_price = models.IntegerField(default=0)
    bid_current_price = models.IntegerField(default=0)
    image = models.FileField(upload_to='products')

    def __str__(self):
        return self.name