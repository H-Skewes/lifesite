from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import models
from db.database import engine, Base, get_db
from routes.events import router as events_router
from routes.login import router as login_router



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events_router, prefix="/api/events")
app.include_router(login_router, prefix = "/api/login")

@app.on_event("startup")
async def startup():
    Base.metadata.create_all(bind=engine)