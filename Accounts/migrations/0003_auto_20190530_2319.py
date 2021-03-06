# Generated by Django 2.2.1 on 2019-05-30 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0002_auto_20190530_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='about',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='display_image_url',
            field=models.URLField(blank=True, max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='middle_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
