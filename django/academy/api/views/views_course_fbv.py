from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from api.models import Course
from api.serializers import CourseSerializer2

@api_view(['GET', 'POST'])
def course_list(request):
    if request.method == 'GET':
        courses = Course.objects.all()
        serializer = CourseSerializer2(courses, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CourseSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
def course_detail(request, course_id):
    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CourseSerializer2(course)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CourseSerializer2(instance=course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        course.delete()
        return Response({'message': 'deleted'}, status=204)
