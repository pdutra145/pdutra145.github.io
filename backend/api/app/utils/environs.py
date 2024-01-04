import os
from dotenv import load_dotenv

# load_dotenv()


SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
API_TOKEN = os.getenv('API_TOKEN')