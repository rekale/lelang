# Generated by Django 2.2 on 2019-04-15 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='auction_end_at',
            field=models.DateTimeField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='auction_start_at',
            field=models.DateTimeField(default=None, null=True),
        ),
    ]