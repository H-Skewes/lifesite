from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    success: bool
    username: str
    avatar_url: str | None = None


@router.post("/login", response_model=LoginResponse)
async def login(body: LoginRequest):
    # Placeholder — swap in real auth logic later
    if body.username == "admin" and body.password == "password":
        return LoginResponse(
            success=True,
            username=body.username,
            avatar_url=None,
        )
    raise HTTPException(status_code=401, detail="Invalid credentials")


@router.post("/logout")
async def logout():
    return {"success": True}