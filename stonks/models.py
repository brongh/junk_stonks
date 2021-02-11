from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from datetime import datetime


class User(AbstractUser):
    username = models.CharField(blank=True, null=True, max_length=20)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.email)


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    account_type = models.IntegerField(
        choices=((1, 'Investor'), (2, 'Company'), (3, 'Superuser')))
    company = models.CharField(max_length=100)
    country = models.CharField(max_length=100)


class Funds(models.Model):
    funds_id = models.AutoField(primary_key=True)
    fund_name = models.CharField(max_length=100, default='Company Name')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    target_funds = models.IntegerField(default=0)
    returns = models.FloatField(default=0)
    proposal = models.CharField(max_length=500)
    funds_deadline = models.DateField(default=datetime.now, blank=True)
    company_description = models.CharField(max_length=500)
    country = models.CharField("Country", max_length=100, default='Singapore')


class Transactions(models.Model):
    transactions_id = models.AutoField(primary_key=True)
    invested_funds = models.ForeignKey(
        Funds, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    investment_sum = models.IntegerField()
    date_invested = models.DateField()


class Accounts(models.Model):
    accounts_id = models.AutoField(primary_key=True)
    funds_id = models.ForeignKey(
        Funds, on_delete=models.CASCADE)
    report_date = models.DateField()
    type = models.CharField(max_length=100)
    revenues = models.IntegerField()
    expenses = models.IntegerField()
    operating_income = models.IntegerField()
    other_income = models.IntegerField()
    pre_tax_income = models.IntegerField()
    tax_provision = models.IntegerField()
    net_income = models.IntegerField()


class Tracker(models.Model):
    funds_id = models.ForeignKey(Funds, on_delete=models.CASCADE)
    visits = models.IntegerField()
    unique_visits = models.IntegerField()
    likes = models.IntegerField()


class Cart(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    funds_id = models.ForeignKey(Funds, on_delete=models.CASCADE)
