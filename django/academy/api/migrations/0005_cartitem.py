# Generated by Django 3.2 on 2021-04-29 16:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210429_1540'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.course')),
            ],
        ),
    ]
