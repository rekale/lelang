from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from bids.models import Bid

class Point(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total = models.IntegerField(default=0)

    # def __str__(self):
    #     return self.user.name

@receiver(post_save, sender=User)
def create_user_point(sender, instance, created, **kwargs):
    if created:
        Point.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_point(sender, instance, **kwargs):
    instance.point.save()

# When creating a new bid, deduct user's points
@receiver(post_save, sender=Bid)
def save_bid_reduce_point(sender, instance, created, **kwargs):
    if created:
        point = Point.objects.get(user_id=instance.user.id)
        point.total = point.total - instance.tokopoints_deducted
        point.save()
