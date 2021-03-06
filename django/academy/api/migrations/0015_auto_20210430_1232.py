# Generated by Django 3.2 on 2021-04-30 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_currentcourses'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name': 'Student', 'verbose_name_plural': 'Students'},
        ),
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name': 'Teacher', 'verbose_name_plural': 'Teachers'},
        ),
        migrations.RemoveField(
            model_name='course',
            name='url',
        ),
        migrations.AddField(
            model_name='course',
            name='imagepath',
            field=models.CharField(max_length=1500, null=True),
        ),
    ]
