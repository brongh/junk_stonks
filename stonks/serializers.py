from django.contrib.auth.models import User, Group
from stonks.models import *  # UserProfile, User, Funds, Transactions
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ('account_type', 'company', 'country')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('url', 'email', 'first_name',
                  'last_name', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        UserProfile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.account_type = profile_data.get(
            'account_type', profile.account_type)
        profile.company = profile_data.get('company', profile.company)
        profile.country = profile_data.get('country', profile.country)
        profile.save()

        return instance


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        token['account_type'] = user.profile.account_type
        return token

        return instance


class FundsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funds
        fields = ('funds_id', 'fund_name', 'owner', 'target_funds', 'returns',
                  'proposal', 'funds_deadline', 'company_description', 'country')


class TransactionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transactions
        fields = ('transactions_id', 'user_id', 'invested_funds',
                  'investment_sum', 'date_invested')


class AccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ('accounts_id', 'funds_id', 'report_date', 'type', 'revenues', 'expenses',
                  'operating_income', 'other_income', 'pre_tax_income', 'tax_provision', 'net_income')


class TrackersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tracker
        fields = ('funds_id', 'visits', 'unique_visits', 'likes')


class CartSerializer(serializers.ModelSerializer):
    fund = FundsSerializer(many=True)

    class Meta:
        model = Cart
        fields = ('user_id', 'funds_id', 'fund')


class FundsTransSerializer(serializers.ModelSerializer):
    transactions_set = TransactionsSerializer(many=True)

    class Meta:
        model = Funds
        fields = ('funds_id', 'fund_name', 'owner', 'target_funds', 'returns', 'proposal',
                  'funds_deadline', 'company_description', 'country', 'transactions_set')


class UserTransSerializer(serializers.ModelSerializer):
    transactions_set = TransactionsSerializer(many=True)
    funds_set = FundsSerializer(many=True)

    class Meta:
        model = User
        fields = ('url', 'email', 'first_name', 'last_name',
                 'profile', 'transactions_set', 'funds_set')


class SuperFundSerializer(serializers.ModelSerializer):
    transactions_set = TransactionsSerializer(many=True)
    accounts_set = AccountsSerializer(many=True)

    class Meta:
        model = Funds
        fields = ('funds_id', 'fund_name', 'owner', 'target_funds', 'returns', 'proposal', 'funds_deadline',
                  'company_description', 'country', 'transactions_set', 'accounts_set')

