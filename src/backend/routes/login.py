from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from db.database import get_db
from db.models import Event
from db.schemas.login import CreateUser, CreateUserResponse, LoginRequest, LoginResponse
from services.login import insert_user, check_userinfo
from fastapi.responses import JSONResponse

router = APIRouter()




@router.post("/createuser", response_model= CreateUserResponse)
async def createuser(body: CreateUser, db: Session = Depends(get_db)):
    creation_success = insert_user(db, body)
    if creation_success == True:
        return JSONResponse(status_code = 200, content={"message": "User Created!"})
    else:
        return JSONResponse(status_code = 400, content={"message": "didnt work"})

@router.post("/checklogin", response_model= LoginResponse)
async def login(body: LoginRequest, db: Session = Depends(get_db)):
    bearerToken = check_userinfo(db, body)
    return{"access_token": bearerToken, "token_type": "bearer"}