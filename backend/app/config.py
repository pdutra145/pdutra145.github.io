import os
import locale

try:
    locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')
except locale.Error as e:
    print(f"Error setting locale: {e}")

class Config:
    HOST = os.getenv('FLASK_RUN_HOST')
    PORT = int(os.getenv('FLASK_RUN_PORT'))
    DEBUG = bool(os.getenv('FLASK_DEBUG'))
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    DEFAULT_FILE_UPLOAD_URL = os.path.join(HOST, str(PORT), 'v1', 'uploads')
    ALLOWED_EXTENSIONS =  {'.txt', '.pdf', '.png', '.jpg', '.jpeg', '.gif'}
