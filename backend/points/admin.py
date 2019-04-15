from django.contrib import admin
from .models import Point
# Register your models here.


@admin.register(Point)
class PointAdmin(admin.ModelAdmin):
    list_display = ('user', 'total')
