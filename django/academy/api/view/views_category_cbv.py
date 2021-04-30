from rest_framework.views import APIView
from api.models import Category, Course
from api.serializers import CategorySerializer, CourseSerializer2
from rest_framework.response import Response
from django.shortcuts import Http404


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CategoryDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Category.objects.get(id=pk)
        except Category.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        try:
            category = self.get_object(pk)
            courses = category.courses.all()
            course_serializer = CourseSerializer2(courses, many=True)
        except Course.DoesNotExist as e:
            return Response({'message': str(e)})
        return Response(course_serializer.data)

    # def put(self, request, pk=None):
    #     category = self.get_object(pk)
    #     serializer = CategorySerializer(instance=category, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    #
    # def delete(self, request, pk=None):
    #     category = self.get_object(pk)
    #     category.delete()
    #     return Response({'message': 'deleted'}, status=204)