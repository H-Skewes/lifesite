import requests

BASE_URL = "http://localhost:8000/api/"

def testing_createuser():
    response = requests.post("http://localhost:8000/api/login/createuser", json={"id": "3", "username": "testing12341", "password": "testingpass123"})
    print(response.status_code, response.content)


def testing_login():
    response = requests.post("http://localhost:8000/api/login/checklogin", json={"username": "testing12341", "password": "testingpass123"})
    print(response.status_code, response.content)


testing_login()

#testing_createuser()