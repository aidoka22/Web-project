from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return f'{self.id}: {self.name}'

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Student(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)


class Teacher(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)



class Course(models.Model):
    title = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    description = models.TextField()
    cost = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name="courses")
    author = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=True, related_name="courses")

    def __str__(self):
        return f'{self.id}: {self.name} | {self.cost}'

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'name': self.name,
            'description': self.description,
            'cost': self.cost,
            'category': self.category.to_json()
        }

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"