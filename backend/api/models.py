from sqlalchemy import Column, Integer, String, BLOB, DateTime,func, ForeignKey
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app import db

class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    username = Column(String(45), nullable=False, unique=True)
    firstName = Column(String(45), nullable=False)
    lastName = Column(String(45), nullable=False)
    email = Column(String(45))
    date = Column(DateTime(), nullable=False, default=func.now())

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
    image = Column(BLOB())
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
    image = Column(BLOB()) 

class ArticlesSerialization(SQLAlchemyAutoSchema):
    class Meta:
        model = Articles
        load_instance = True