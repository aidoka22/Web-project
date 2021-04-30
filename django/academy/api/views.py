from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http.response import JsonResponse
import json

@csrf_exempt
def register(request):
    if request.method == "POST":
        # try:
        data = json.loads(request.body)
        user = User.objects.create_user(username=data['name'],
                                        email=data['email'],
                                        password=data['password'])
        # user = User.objects.create_user(username='john',
        #                                 email='jlennon@beatles.com',
        #                                 password='glass onion')
        user.save()
        #     return JsonResponse({'message': 'new user created'})
        # except Exception as e:
        #     return JsonResponse({'message': str(e)})