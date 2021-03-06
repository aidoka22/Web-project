# Generated by Django 3.2 on 2021-04-28 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210428_1500'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student', models.IntegerField()),
                ('course', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='WishList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student', models.IntegerField()),
                ('course', models.IntegerField()),
            ],
        ),
        migrations.AlterField(
            model_name='currentcourses',
            name='course',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='currentcourses',
            name='student',
            field=models.IntegerField(),
        ),
    ]
