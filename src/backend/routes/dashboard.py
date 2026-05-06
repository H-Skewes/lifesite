from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class TodoItem(BaseModel):
    id: int
    text: str
    done: bool


class CalendarEvent(BaseModel):
    id: int
    title: str
    date: str
    time: str | None = None


class Note(BaseModel):
    id: int
    title: str
    preview: str
    updated_at: str


class EmailAlert(BaseModel):
    id: int
    subject: str
    sent_at: str
    recipient: str


class DashboardData(BaseModel):
    todos: list[TodoItem]
    events: list[CalendarEvent]
    recent_note: Note | None
    recent_emails: list[EmailAlert]


@router.get("/", response_model=DashboardData)
async def get_dashboard():
    # Stub data — replace with real db queries later
    return DashboardData(
        todos=[
            TodoItem(id=1, text="Order rack case for 3080 server", done=False),
            TodoItem(id=2, text="Run ethernet to office rack", done=False),
            TodoItem(id=3, text="Test BH1750 sensor node", done=False),
            TodoItem(id=4, text="Finish business card display enclosure", done=False),
            TodoItem(id=5, text="Configure Frigate NVR", done=False),
        ],
        events=[
            CalendarEvent(id=1, title="Hardware delivery", date="2026-05-07", time="All day"),
            CalendarEvent(id=2, title="Network switchover", date="2026-05-10", time="2:00 PM"),
            CalendarEvent(id=3, title="Rack build day", date="2026-05-15", time="10:00 AM"),
        ],
        recent_note=Note(
            id=1,
            title="Proxmox VM setup notes",
            preview="Ubuntu 24.04 LTS. Install uv first. FastAPI runs on port 8000...",
            updated_at="2026-05-04",
        ),
        recent_emails=[
            EmailAlert(id=1, subject="Daily briefing — May 5", sent_at="2026-05-05 07:00", recipient="you@home.local"),
            EmailAlert(id=2, subject="Daily briefing — May 4", sent_at="2026-05-04 07:00", recipient="you@home.local"),
        ],
    )