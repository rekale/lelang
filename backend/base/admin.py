from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from points.models import Point

class PointInline(admin.StackedInline):
    model = Point
    can_delete = False
    verbose_name_plural = 'point'

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (PointInline,)

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)