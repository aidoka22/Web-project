from rest_framework import serializers

from api.models import Course, Category, Student, WishList

class CourseSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    name = serializers.CharField()
    description = serializers.CharField()
    cost = serializers.FloatField()
    category = serializers.CharField()
    author = serializers.CharField()

    def create(self, validated_data):
        course = Course.objects.create(title=validated_data.get('title'),
                                       name=validated_data.get('name'),
                                       description=validated_data.get('description'),
                                       cost=validated_data.get('cost'),
                                       category=validated_data.get('category'),
                                       author=validated_data.get('author'))
        return course

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title')
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.cost = validated_data.get('cost')
        instance.category = validated_data.get('category')
        instance.author = validated_data.get('author')
        instance.save()
        return instance

class CourseSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'name', 'description', 'cost', 'category', 'author')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = ('id', 'student', 'items')