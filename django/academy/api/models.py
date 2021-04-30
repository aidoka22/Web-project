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

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'surname': self.surname,
            'username': self.username,
            'password': self.password
        }

    def __str__(self):
        return f'{self.id}: {self.name} {self.surname}'

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"

class Teacher(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'surname': self.surname,
            'username': self.username,
            'password': self.password
        }

    def __str__(self):
        return f'{self.id}: {self.name} {self.surname}'

    class Meta:
        verbose_name = "Teacher"
        verbose_name_plural = "Teachers"

class Course(models.Model):
    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField()
    cost = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name="courses")
    author = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=True, related_name="courses")
    imagepath = models.CharField(max_length=1500, null=True)

    def __str__(self):
        return f'{self.id}: {self.name} | {self.cost}'

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'name': self.name,
            'description': self.description,
            'cost': self.cost,
            'category': self.category.to_json(),
            'author': self.author.to_json(),
            'imagepath': self.imagepath
        }

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"

class Cart(models.Model):
    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True)
    items = models.ManyToManyField(Course)

    def __str__(self):
        return '{0} - {1}'.format(self.student, self.items.all())

    def get_cart_items(self):
        data = self.items.all()
        data = [i.to_json() for i in data]
        return data

    def get_total(self):
        return sum([item.course.cost for item in self.items.all()])

class WishList(models.Model):
    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True)
    items = models.ManyToManyField(Course, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self.student, self.items.all())

    def get_wishlist_items(self):
        data = self.items.all()
        data = [i.to_json() for i in data]
        return data

class CurrentCourses(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, related_name="currentcourses")
    items = models.ManyToManyField(Course)

    def __str__(self):
        return '{0} - {1}'.format(self.student, self.get_my_courses())

    def get_my_courses(self):
        data = self.items.all()
        data = [i.to_json() for i in data]
        return data