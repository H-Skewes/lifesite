import requests
from dotenv import load_dotenv, find_dotenv
from datetime import datetime, timedelta, timezone
import os

load_dotenv(find_dotenv())
url = os.getenv("WEATHERURL")

def weather_request():
    response = requests.get(url)
    if response.status_code == 200:
        weatherdata = response.json()
        return weatherdata
    else:
        return response.status_code
    