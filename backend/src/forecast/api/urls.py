from django.urls import path

from .views import AddCity, GetWeather, RemoveCity


urlpatterns = [
    path('', GetWeather.as_view()),
    path('add_city/', AddCity.as_view()),
    path('remove_city/', RemoveCity.as_view()),
]