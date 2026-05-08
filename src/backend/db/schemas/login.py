from pydantic import BaseModel
from datetime import date


class CreateUser(BaseModel):
    id: int
    username: str
    password: str



class CreateUserResponse(BaseModel):
    success: bool
    username: str
    token: str


class LoginRequest(BaseModel):
    username: str
    password: str
    

class LoginResponse(BaseModel):
    access_token: str
    token_type: str
