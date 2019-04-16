from django.contrib import admin
from points.models import ProductPoint
from .models import Product
# Register your models here.


class PointInline(admin.StackedInline):
    model = ProductPoint
    can_delete = False
    verbose_name_plural = 'product point'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = (PointInline,)

