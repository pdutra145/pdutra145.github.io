from flask import Blueprint, request
from sqlalchemy import inspect
from models import Introduction
from ..utils.model_ops import fetch_by_id, fetch_by_title, get_model_fields
from ..utils.security import check_api_token
from app import db

introduction = Blueprint('intro', __name__, url_prefix='/introduction')

intro_fields = get_model_fields(Introduction)

# GET REQUESTS
@introduction.get('/sobre_mim')
def sobre_mim():
    return fetch_by_title('Sobre Mim', Introduction, intro_fields).get('data')[0]

@introduction.get('/programming')
def programming():
    return fetch_by_title('Programação', Introduction, intro_fields)

@introduction.get('/programming/<int:text_id>')
def programming_by_id(text_id):
    return fetch_by_id(Introduction, text_id)

@introduction.get('/economics')
def economics():
    return fetch_by_title('Economia', Introduction, intro_fields)

@introduction.get('/economics/<int:text_id>')
def economics_by_id(text_id):
    return fetch_by_id(Introduction, text_id)

# POST REQUESTS
@introduction.post('/')
@check_api_token
def post_to_intro():
    body = request.get_json()

    new_program_entry = Introduction(title=body.get('title'), text=body.get('text'))

    db.session.add(new_program_entry)
    db.session.commit()

    return dict(status='success', data=dict(message='Novo texto adicionado com sucesso para Introdução', body=body))

