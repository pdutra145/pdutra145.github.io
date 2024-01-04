from sqlalchemy import Column, Integer, Text, BLOB, DateTime, func, ForeignKey
from app import db

class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    username = Column(Text(45), nullable=False, unique=True)
    firstName = Column(Text(45), nullable=False)
    lastName = Column(Text(45), nullable=False)
    email = Column(Text(45))
    date = Column(DateTime(), nullable=False, default=func.now())

class Introduction(db.Model):
    __tablename__ = 'introduction'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    title = Column(Text(45), nullable=False)
    text = Column(Text, nullable=False)
    date = Column(DateTime(), nullable=False, default=func.now())

class Certificados(db.Model):
    __tablename__ = 'certificados'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    title = Column(Text(45), nullable=False)
    description = Column(Text(45))
    image = Column(BLOB())
    post_date = Column(DateTime(), nullable=False, default=func.now())

class File(db.Model):
    __tablename__ = 'files'

    id = Column(Integer(), nullable=False, primary_key=True, autoincrement=True)
    certificate_id = Column(ForeignKey('certificados.id'))
    table = Column(Text)
    filename = Column(Text, nullable=False)
    filetype = Column(Text, nullable=False)
    date = Column(DateTime(), nullable=False, default=func.now())
    content = Column(BLOB())