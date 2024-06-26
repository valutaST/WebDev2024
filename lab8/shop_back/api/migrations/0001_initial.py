# Generated by Django 5.0.3 on 2024-04-04 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('categoryId', models.IntegerField()),
                ('price', models.FloatField(default=0)),
                ('description', models.TextField(default='')),
                ('count', models.IntegerField(default=0)),
                ('is_active', models.BooleanField(default=False)),
            ],
        ),
    ]
