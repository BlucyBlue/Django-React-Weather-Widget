from .get_weather_data import get_woeid, get_weather_data
from rest_framework.views import APIView
from rest_framework.response import Response
from ..models import City
from .serializers import CitySerializer
from braces.views import CsrfExemptMixin


class GetWeather(APIView):

    def get(self, request):
        for city in City.objects.all():
            data = get_weather_data(city.woeid)
            city.temperature=data['temperature']
            city.weather_type = data['weather_type']
            city.air_pressure = data['air_pressure']
            city.wind_speed = data['wind_speed']
            city.humidity = data['humidity']
            city.image = data['image']
            city.save()

        dd = City.objects.all()
        serializer = CitySerializer(dd, many=True)
        return Response(serializer.data)


class AddCity(CsrfExemptMixin, APIView):

    authentication_classes = []

    def post(self, request):
        city_name = request.data['location']

        if len(City.objects.filter(name=city_name)) > 0:
            return Response(f'{city_name} already in the API.')

        woeid = get_woeid(city_name)

        new_city = City(name=city_name, woeid=woeid)
        new_city.save()

        dd = City.objects.filter(woeid=woeid)
        serializer = CitySerializer(dd, many=True)

        return Response(serializer.data)


class RemoveCity(CsrfExemptMixin, APIView):

    authentication_classes = []

    def post(self, request):
        city_name = request.data['location']
        city_to_delete = City.objects.filter(name=city_name)
        for c  in city_to_delete:
            c.delete()

        return Response(f'Deleted {city_name}.')