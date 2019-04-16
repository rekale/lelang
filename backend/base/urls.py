from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from products import views as views_product
from bids import views as views_bid
from points import views as views_point


admin.site.site_header = "Lelang Tokopedia"
admin.site.site_title = "Lelang Tokopedia"
admin.site.index_title = "Welcome to Tokopedia"

router = routers.DefaultRouter()
router.register(r'products', views_product.ProductViewSet)
router.register(r'bids', views_bid.BidViewSet)
router.register(r'bid_options', views_bid.BidOptionViewSet)
router.register(r'points', views_point.PointViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)