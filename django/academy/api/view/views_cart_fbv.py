from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Course, Cart, Student

@api_view(['POST', 'DELETE'])
def cart(request, course_id, student_id):

    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'POST':
        try:
            w = Cart.objects.get(student_id=student_id)
            w.items.add(course)
            w.save()
        except Exception as e:
            w = Cart()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.items.add(course)
            w.save()
        return Response({'message': 'done'})

    if request.method == "DELETE":
        w = Cart.objects.get(student_id=student_id)
        w.items.remove(course)
        w.save()
        return Response({'message': 'done'})

@api_view(['GET'])
def list_cart(request, student_id):
    if request.method == 'GET':
        try:
            w = Cart.objects.get(student_id=student_id)
        except Exception as e:
            w = Cart()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.save()
            w = Cart.objects.get(student_id=student_id)

        return Response(w.get_cart_items())
@api_view(['DELETE'])
def clear_cart(request, student_id):
    if request.method == 'DELETE':
        try:
            w = Cart.objects.get(student_id=student_id)
            w.items.clear()
        except Exception as e:
            w = Cart()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.save()
            w = Cart.objects.get(student_id=student_id)

        return Response(w.get_cart_items())
