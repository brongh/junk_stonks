# Generated by Django 3.1.6 on 2021-02-09 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stonks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='funds',
            name='fund_name',
            field=models.CharField(default='Company Name', max_length=100),
        ),
    ]
