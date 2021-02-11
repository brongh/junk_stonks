from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from stonks import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from stonks.views import MyObtainTokenPairView
from django.views.generic import TemplateView


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'funds', views.FundViewSet)
router.register(r'transactions', views.TransactionViewSet)
router.register(r'accounts', views.AccountViewSet)
router.register(r'funds_trans', views.FundTransViewSet)
router.register(r'user_trans', views.UserTransViewSet)
router.register(r'trackers', views.TrackerViewSet)
router.register(r'superfund', views.SuperFundViewSet)
# router.register(r'ultrafund', views.UltraFundViewSet)
router.register(r'cart', views.CartViewSet)
# router.register(r'groups', views.GroupViewSet)
# router.register(r'profiles', views.ProfileViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/token/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
