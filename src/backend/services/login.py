from sqlalchemy.orm import Session
from db.database import get_db
from db.models import User
from db.schemas.login import CreateUserResponse, CreateUser
from security_helpers.crypto_helper import hash_password, create_jwt
import bcrypt


def get_user_by_username(db: Session, username: str) -> User | None:
    return db.query(User).filter(User.username == username).first()


# basically creates a user checks db if user exists first
def insert_user(db: Session, data: CreateUser) -> User:
    existing = user = get_user_by_username(db, data.username)
    if existing:
        return False
    hashedpass = hash_password(data.password)
    newUser = User(id = data.id, username = data.username, password=hashedpass)
    try:
        db.add(newUser)
        db.commit()
        db.refresh(newUser)
        return True
    except:
        return False


def get_userinfo(db: Session, username: str) -> User:
    user = get_user_by_username(db, username)
    if user:
        return user.password
    else:
        return "user does not exist"

def check_userinfo(db: Session, data: LoginRequest) -> bool:
    userdata = get_user_by_username(db, data.username)
    userpasswd = userdata.password
    userid = userdata.id
    if userpasswd is None:
        return None
    if bcrypt.checkpw(data.password.encode("utf-8"), userpasswd) == True:
        token = create_jwt(userid, data.username)
        return token
    else:
        return None
        

