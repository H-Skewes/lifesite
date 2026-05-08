# services/events.py
from sqlalchemy.orm import Session
from db.database import get_db
from db.models import Event
from db.schemas.events import EventCreate, EventResponse

def create_event(db: Session, user_id: int, data: EventCreate) -> Event:
    event = Event(
        name=data.name,
        date=data.date,
        description=data.description,
        user_id=user_id
    )
    db.add(event)
    db.commit()
    db.refresh(event)
    return event

def get_events_for_user(db: Session, user_id: int) -> list[Event]:
    return db.query(Event).filter(Event.user_id == user_id).all()

def get_event_by_id(db: Session, event_id: int, user_id: int) -> Event | None:
    return (
        db.query(Event)
        .filter(Event.id == event_id, Event.user_id == user_id)
        .first()
    )

def delete_event(db: Session, event_id: int, user_id: int) -> bool:
    event = get_event_by_id(db, event_id, user_id)
    if not event:
        return False
    db.delete(event)
    db.commit()
    return True