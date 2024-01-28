from flask_graphql import GraphQLView
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, g
from flask_cors import CORS

from .config import Config

db = SQLAlchemy()

from .models import User, Certificados, Introduction, Articles
from .graphql import schema
from .image_route import imagem
from .middleware.auth import auth



def create_app():
    app = Flask(__name__)

    app.config.from_prefixed_env()
    app.config['SECRET_KEY'] = Config.SECRET_KEY
    app.config["SQLALCHEMY_DATABASE_URI"] = Config.SQLALCHEMY_DATABASE_URI

    app.config["MAX_CONTENT_LENGTH"] = 1024 * 1024
    app.config["UPLOAD_EXTENSIONS"] = Config.ALLOWED_EXTENSIONS
    app.config["UPLOADS_DEFAULT_DEST"] = "uploads"
    app.config["UPLOADS_DEFAULT_URL"] = Config.DEFAULT_FILE_UPLOAD_URL

    CORS(app, origins="*")

    db.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(imagem)
    app.register_blueprint(auth)

    app.add_url_rule(
        "/graphql",
        view_func=GraphQLView.as_view(
            "graphql", schema=schema, graphiql=True  # for having the GraphiQL interface
        ),
    )

    return app
