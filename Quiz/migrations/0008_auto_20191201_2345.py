# Generated by Django 2.2.1 on 2019-12-01 18:15

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Quiz', '0007_auto_20191201_2335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='option_text',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='question',
            name='question_text',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
