# This could be in a file named app.py at the root of your filesystem

from waitress import serve
from app import create_app
from app.config import Config

app = create_app()

if __name__ == "__main__":
    serve(app, host=Config.HOST, port=Config.PORT)
