from django.db import models

class City(models.Model):
    name = models.TextField(max_length=120)
    woeid = models.CharField(max_length=50)
    temperature = models.IntegerField(default=0)
    weather_type = models.TextField(default='')
    air_pressure = models.IntegerField(default=0)
    wind_speed = models.IntegerField(default=0)
    humidity = models.IntegerField(default=0)
    image = models.TextField(default='')

    def __str__(self):
        return self.name

    @property
    def to_dict(self):
        data = {
            'name':self.name,
            'temperature':self.temperature,
            'weather_type':self.weather_type,
            'air_pressure':self.air_pressure,
            'wind_speed':self.wind_speed,
            'humidity':self.humidity,
            'image':self.image,
        }

        return data