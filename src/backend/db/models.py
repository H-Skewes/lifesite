from database import Base
from sqlalchemy import Column, Integer, String

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password = Column(String, unique=True)


class Events(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    date = Column(String)
    userid = Column(Integer)


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