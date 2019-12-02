# Generated by Django 2.2.1 on 2019-12-02 11:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0004_auto_20190729_1442'),
        ('Quiz', '0008_auto_20191201_2345'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnswerSheet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('time', models.TimeField(auto_now_add=True)),
                ('quiz', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Quiz.Quiz')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Accounts.Student')),
            ],
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Quiz.Option')),
                ('answersheet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Quiz.AnswerSheet')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Quiz.Question')),
            ],
        ),
    ]
