import requests
from dotenv import load_dotenv, find_dotenv
from datetime import datetime, timedelta, timezone
import os

load_dotenv(find_dotenv())
url = os.getenv("WEATHERURL")

def weather_request():
    response = requests.get(url)
    if response.status_code == 200:
        weatherdata = filter_weather_data(response.json())
        return weatherdata
    else:
        return response.status_code


def filter_weather_data(response):
    filtered_location = response["location"]["name"] + response["location"]["region"]
    filtered_data = f'{{"city": {response["location"]["name"]}, "state": {response["location"]["region"]}, "feelslike": {response["current"]["feelslike_f"]}, "windspeed": {response["current"]["wind_mph"]}, "rainpossibility": {response["current"]["chance_of_rain"]}, "snowpossibility": {response["current"]["chance_of_snow"]}, "uv": {response["current"]["uv"]}}}'
    return filtered_data