from flask import jsonify, Blueprint, request
from .introduction import introduction
from .certificados import certificados
from .auth import auth
from app import db

v1 = Blueprint('routes', __name__, url_prefix='/v1')

v1.register_blueprint(introduction)
v1.register_blueprint(certificados)
v1.register_blueprint(auth)

@v1.post('/uploads')
def upload_files():
    uploaded_file = request.files['file']
    if uploaded_file:
        filename = uploaded_file.filename
        file_data = uploaded_file.read()

        return dict(status='success', data=dict(filename=filename, file=file_data))

@v1.route('/')
def index():
    return jsonify(message='HELLO WORLD', status='success')

@v1.get('/descricao')
def description():
    return jsonify(message='BYE', status='success')

@v1.get('/bye')
def bye():
    return jsonify(message='BYE', status='success')

@v1.get('/foo')
def foo():
    return jsonify(message='FOO', status='success')