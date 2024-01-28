import base64
import graphene
import bcrypt
from graphene_sqlalchemy import SQLAlchemyObjectType
from sqlalchemy import Column, Integer, String, BLOB, DateTime,func, ForeignKey
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app import db
from flask import current_app

class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    username = Column(String(45), nullable=False, unique=True)
    firstName = Column(String(45))
    lastName = Column(String(45))
    email = Column(String(45))
    password = Column(String(255), nullable=False)
    date = Column(DateTime(), nullable=False, default=func.now())

    @classmethod
    def check_for_user(cls, username, password):
        user = cls.query.filter_by(username=username).first()

        if user:
            hashed_pwd = user.password.encode('utf-8')

            return bcrypt.checkpw(password.encode('utf-8'), hashed_pwd)
        return False

    @classmethod
    def create_new(cls, username, password,**kwargs):
        encoded_pwd = password.encode('utf-8')
        hash_pwd = bcrypt.hashpw(encoded_pwd, bcrypt.gensalt())

        new_user = cls(username=username, password=hash_pwd.decode('utf-8'))
        db.session.add(new_user)
        db.session.commit()


class Introduction(db.Model):
    __tablename__ = 'introduction'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    title = Column(String(45), nullable=False)
    text = Column(String(255), nullable=False)
    date = Column(DateTime(), nullable=False, default=func.now())
    lastUpdated = Column(DateTime(), nullable=False, default=func.now())

class Certificados(db.Model):
    __tablename__ = 'certificados'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    title = Column(String(45), nullable=False)
    description = Column(String(255))
    imagePath = Column(String(45))
    post_date = Column(DateTime(), nullable=False, default=func.now())
    lastUpdated = Column(DateTime(), nullable=False, default=func.now())

class File(db.Model):
    __tablename__ = 'files'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    certificate_id = Column(ForeignKey('certificados.id'))
    table = Column(String(45))
    filename = Column(String(100), nullable=False)
    filetype = Column(String(10), nullable=False)
    date = Column(DateTime(), nullable=False, default=func.now())
    lastUpdated = Column(DateTime(), nullable=False, default=func.now())
    content = Column(BLOB())

class Articles(db.Model):
    __tablename__ = 'articles'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    topic =  Column(String(45), nullable=False)
    tags = Column(String(100))
    header =  Column(String(100), nullable=False)
    content = Column(String(255))
    creationDate = Column(DateTime(), nullable=False, default=func.now())
    lastUpdated = Column(DateTime(), nullable=False, default=func.now())
    imagePath = Column(String(45))

# Serialization
class ArticlesSerialization(SQLAlchemyAutoSchema):
    class Meta:
        model = Articles
        load_instance = True

