from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Course, WishList, Student

@api_view(['POST', 'DELETE'])
def wishlist(request, course_id, student_id):

    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'POST':
        try:
            w = WishList.objects.get(student_id=student_id)
            w.items.add(course)
            w.save()
        except Exception as e:
            w = WishList()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.items.add(course)
            w.save()
        return Response({'message': 'done'})

    if request.method == "DELETE":
        w = WishList.objects.get(student_id=student_id)
        w.items.remove(course)
        w.save()
        return Response({'message': 'done'})

@api_view(['GET'])
def list_wishlist(request, student_id):

    if request.method == 'GET':
        try:
            w = WishList.objects.get(student_id=student_id)
        except Exception as e:
            w = WishList()
            w.save()
            w.student = Student.objects.get(pk=student_id)
            w.save()
            w = WishList.objects.get(student_id=student_id)

        return Response(w.get_wishlist_items())