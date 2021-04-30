# Generated by Django 3.2 on 2021-04-28 15:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_currentcourses'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='currentcourses',
            name='studentId',
        ),
        migrations.AddField(
            model_name='currentcourses',
            name='student',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='students', to='api.student'),
        ),
    ]