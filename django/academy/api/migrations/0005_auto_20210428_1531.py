# Generated by Django 3.2 on 2021-04-28 15:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210428_1514'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='currentcourses',
            name='course',
        ),
        migrations.AddField(
            model_name='currentcourses',
            name='courses',
            field=models.ManyToManyField(blank=True, to='api.Course'),
        ),
        migrations.AlterField(
            model_name='currentcourses',
            name='student',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='students', to='api.student'),
        ),
    ]
