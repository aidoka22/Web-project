from django.contrib import admin
from api.models import Teacher, Student, Category, Course, WishList, Cart, CurrentCourses

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'surname', 'username', 'password')

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'surname', 'username', 'password')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'name', 'description', 'cost', 'category', 'author', 'imagepath')

admin.site.register(WishList)
admin.site.register(CurrentCourses)
admin.site.register(Cart)