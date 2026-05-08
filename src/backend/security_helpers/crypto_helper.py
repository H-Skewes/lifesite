import bcrypt
import jwt
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())
secret = os.getenv("SECRETKEY")

def hash_password(password: str):
    hashedpass = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    return hashedpass


def create_jwt(userid: int, username: str):
    payload = {"sub": userid, "name": username, "exp": datetime.now(timezone.utc) + timedelta(minutes=600)}
    token = jwt.encode(payload, secret, algorithm="HS256")
    return token
