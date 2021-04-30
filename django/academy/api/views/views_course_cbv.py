from rest_framework.views import APIView
from api.models import Course
from api.serializers import CourseSerializer2
from rest_framework.response import Response
from django.shortcuts import Http404

class CourseListAPIView(APIView):
    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer2(courses, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CourseSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CourseDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Course.objects.get(id=pk)
        except Course.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        course = self.get_object(pk)
        serializer = CourseSerializer2(course)
        return Response(serializer.data)

    def put(self, request, pk=None):
        course = self.get_object(pk)
        serializer = CourseSerializer2(instance=course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        course = self.get_object(pk)
        course.delete()
        return Response({'message': 'deleted'}, status=204)