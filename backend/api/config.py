import os
import locale

locale.setlocale(locale.LC_ALL, 'pt-BR')

class Config:
    HOST = os.getenv('HOST')
    PORT = int(os.getenv('FLASK_RUN_PORT'))
    DEBUG = bool(os.getenv('FLASK_DEBUG'))
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    DEFAULT_FILE_UPLOAD_URL = os.path.join(HOST, str(PORT), 'v1', 'uploads')
    ALLOWED_EXTENSIONS =  {'.txt', '.pdf', '.png', '.jpg', '.jpeg', '.gif'}
