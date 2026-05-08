# schemas/events.py
from pydantic import BaseModel
from datetime import date

class EventCreate(BaseModel):
    id: int
    name: str
    date: date
    description: str

class EventResponse(BaseModel):
    id: int
    name: str
    date: date
    description: str
    user_id: int

    model_config = {"from_attributes": True}