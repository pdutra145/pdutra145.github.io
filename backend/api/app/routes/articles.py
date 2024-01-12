from flask import Blueprint, request
from models import Articles
from app import db

artigos = Blueprint(__name__, 'articles', url_prefix='/articles')

@artigos.get('/')
def all_articles():
    all_articles = db.session.query(Articles).all()

    articles = []
    