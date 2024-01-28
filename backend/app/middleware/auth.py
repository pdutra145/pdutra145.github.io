import jwt
import datetime
from flask import g, Blueprint, request, current_app, jsonify, session, make_response
from ..models import User
from functools import wraps

auth = Blueprint("auth", __name__, url_prefix="/auth")


# @current_app.before_request
def protected(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.cookies.get("token")
        try:
            # Decode token and verify its integrity and authenticity
            decoded_token = jwt.decode(
                token, current_app.config["SECRET_KEY"], algorithms=["HS256"]
            )
            # Token is valid, and you can use the data in decoded_token
            return f(*args, **kwargs)
        except:
            return dict(message="Usern not authenticated")

    return wrapper


def create_jwt(username):
    user_info = {
        "user": username,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1),
    }
    token = jwt.encode(user_info, current_app.config["SECRET_KEY"])

    resp = make_response("Authentication was successfull!")
    resp.set_cookie("token", token, expires=user_info["exp"], httponly=True)

    return resp


@auth.route("/login", methods=["POST"])
def login():
    # Here you should validate the username and password (omitted for brevity)
    username = request.json.get("username")
    password = request.json.get("password")

    if User.check_for_user(username, password):  # Implement this function
        return create_jwt(username)

    return jsonify({"message": "Invalid credentials"}), 401


@auth.post("/signin")
def signin():
    username = request.json.get("username")
    password = request.json.get("password")

    new_user = User.create_new(username, password)

    return create_jwt(new_user.username)
