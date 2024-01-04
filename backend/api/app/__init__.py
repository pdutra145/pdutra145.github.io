from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
# from flask_uploads import IMAGES, configure_uploads

from config import Config

db = SQLAlchemy()

from models import User, Certificados, Introduction

def create_app():
    app = Flask(__name__)

    app.config.from_prefixed_env()
    app.config["SQLALCHEMY_DATABASE_URI"] = Config.SQLALCHEMY_DATABASE_URI

    app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024
    app.config['UPLOAD_EXTENSIONS'] = Config.ALLOWED_EXTENSIONS
    app.config['UPLOADS_DEFAULT_DEST'] = 'uploads'
    app.config['UPLOADS_DEFAULT_URL'] = Config.DEFAULT_FILE_UPLOAD_URL

    CORS(app)

    # configure_uploads(app, (IMAGES,))

    db.init_app(app)

    with app.app_context():
        db.create_all()

    from .routes import v1

    app.register_blueprint(v1)

    return app