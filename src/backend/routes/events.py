# routes/events.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from db.models import Event
from db.schemas.events import EventCreate, EventResponse
import services.events as event_service

router = APIRouter()

@router.post("/", response_model=EventResponse)
async def create_event(
    data: EventCreate,
    db: Session = Depends(get_db),
    # swap this for real auth later
    user_id: int = 1
):
    return event_service.create_event(db, user_id, data)

@router.get("/", response_model=list[EventResponse])
async def get_events(
    db: Session = Depends(get_db),
    user_id: int = 1
):
    return event_service.get_events_for_user(db, user_id)

@router.get("/{event_id}", response_model=EventResponse)
async def get_event(
    event_id: int,
    db: Session = Depends(get_db),
    user_id: int = 1
):
    event = event_service.get_event_by_id(db, event_id, user_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event

@router.delete("/{event_id}")
async def delete_event(
    event_id: int,
    db: Session = Depends(get_db),
    user_id: int = 1
):
    success = event_service.delete_event(db, event_id, user_id)
    if not success:
        raise HTTPException(status_code=404, detail="Event not found")
    return {"success": True}