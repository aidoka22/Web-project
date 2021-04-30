from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token
from api.views import course_list, course_detail, CourseListAPIView, CourseDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, wishlist, list_wishlist, cart, list_cart, current_course, list_current_courses, buy_current_courses

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('courses/<int:course_id>/current_courses/<int:student_id>', current_course),

    path('courses/<int:course_id>/wishlist/<int:student_id>', wishlist),
    path('wishlist/<int:student_id>', list_wishlist),

    path('courses/<int:course_id>/cart/<int:student_id>', cart),
    path('cart/<int:student_id>', list_cart),

    path('cart/<int:student_id>/buy', buy_current_courses),
    path('current_courses/<int:student_id>', list_current_courses),

    path('categories/courses/', course_list),
    path('categories/courses/<int:course_id>/', course_detail),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    # path('courses/', CourseListAPIView.as_view()),
    # path('courses/<int:pk>/', CourseDetailAPIView.as_view()),
]