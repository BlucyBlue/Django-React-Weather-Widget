import requests
import json

weather_abreviations = {
		'Snow':'sn',
		'Sleet':'sl',
		'Hail':'h',
		'Thunderstorm':'t',
		'Thunder': 't',
		'Heavy Rain':'hr',
		'Light Rain':'lr',
		'Showers':'s',
		'Heavy Cloud':'hc',
		'Light Cloud':'lc',
		'Clear':'c',
}


def get_weather_data(woeid):
	weather = json.loads(requests.get(f'https://www.metaweather.com/api/location/{woeid}').content.decode('utf-8'))['consolidated_weather'][0]
	data = {
		'temperature':weather["the_temp"],
		'weather_type':weather['weather_state_name'],
		'air_pressure':weather['air_pressure'],
		'wind_speed':weather['wind_speed'],
		'humidity':weather['humidity'],
		'image':weather_abreviations[weather['weather_state_name']],
	}

	return data


def get_woeid(location):
	try:
		woeid = json.loads(requests.get(f'https://www.metaweather.com/api/location/search/?query={location.lower()}').content)[0]["woeid"]
		return woeid

	except IndexError:
		print(f'Location "{location}" not found.')

