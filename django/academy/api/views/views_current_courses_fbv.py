from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Course, CurrentCourses, Student, Cart

@api_view(['POST'])
def current_course(request, course_id, student_id):

    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'POST':
        try:
            w = CurrentCourses.objects.get(student_id=student_id)
            w.items.add(course)
            w.save()
        except Exception as e:
            w = CurrentCourses()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.items.add(course)
            w.save()
        return Response({'message': 'done'})

@api_view(['POST'])
def buy_current_courses(request, student_id):

    if request.method == 'POST':
        try:
            w = CurrentCourses.objects.get(student_id=student_id)
            c = Cart.objects.get(student_id=student_id)
            for i in c.items.all():
                w.items.add(i)
            c.items.clear()
            c.save()
            w.save()

        except Exception as e:
            w = CurrentCourses()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.save()
            c = Cart.objects.get(student_id=student_id)
            for i in c.items.all():
                w.items.add(i)
            c.items.clear()
            c.save()
            w.save()

        return Response({'message': 'done'})

@api_view(['GET'])
def list_current_courses(request, student_id):

    if request.method == 'GET':
        try:
            w = CurrentCourses.objects.get(student_id=student_id)
        except Exception as e:
            w = CurrentCourses()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.save()
            w = CurrentCourses.objects.get(student_id=student_id)

        return Response(w.get_my_courses())