from flask import request
from .environs import API_TOKEN

def check_api_token(func):
    def wrapper(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            token = auth_header.split(" ")[1]
            if token == API_TOKEN:
                return_obj = func(*args, **kwargs)
                return return_obj
            return dict(message='Invalid Token'), 400
        return dict(message='No token'), 401
    return wrapper