from db.database import Base
from sqlalchemy import Column, Integer, String, Date, ForeignKey

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password = Column(String, unique=True)


class Event(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    description = Column(String)


class Todo(Base):
    __tablename__ = "todo"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    date = Column(String)
    userid = Column(Integer)


# future feature
class Outfit(Base):
    __tablename__ = "outfits"
    id = Column(Integer, primary_key=True)
    name = Column(String)

# clothes class here