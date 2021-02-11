from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from stonks.serializers import UserSerializer
from stonks.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from .serializers import MyTokenObtainPairSerializer
from stonks.serializers import *
from stonks.models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseNotFound
import os
from django.views import View
# from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes =[IsAuthenticated]


class MyObtainTokenPairView(TokenObtainPairView):
    permissions_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class FundViewSet(viewsets.ModelViewSet):
    queryset = Funds.objects.all()
    serializer_class = FundsSerializer


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer


class TrackerViewSet(viewsets.ModelViewSet):
    queryset = Tracker.objects.all()
    serializer_class = TrackersSerializer


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class UserTransViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserTransSerializer


class FundTransViewSet(viewsets.ModelViewSet):
    queryset = Funds.objects.all()
    serializer_class = FundsTransSerializer


class SuperFundViewSet(viewsets.ModelViewSet):
    queryset = Funds.objects.all()
    serializer_class = SuperFundSerializer

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
