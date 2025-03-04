from flask import Blueprint
from app.controllers.user_controller import get_random_user, get_random_listed_users

user_bp = Blueprint("user", __name__)
list_bp = Blueprint("list", __name__)

user_bp.route("/", methods=["GET"])(get_random_user)
list_bp.route("/", methods=["GET"])(get_random_listed_users)