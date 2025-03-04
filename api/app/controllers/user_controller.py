from flask import jsonify, request
from app.services.user_service import fetch_random_user, get_listed_users

def get_random_user():
    """Controller para buscar um usuário aleatório."""
    user_data = fetch_random_user()
    if not user_data:
        return jsonify({"error": "Não foi possível obter os dados do usuário"}), 500
    return jsonify(user_data)

def get_random_listed_users():
    """Controller para buscar uma lista de usuários."""
    quantity = request.args.get("quantity", default=100, type=int)  # Definindo 100 como padrão
    list_data = get_listed_users(quantity)  # Passa `quantity` corretamente como número
    if not list_data: 
        return jsonify({"error": "Não foi possível obter a lista de usuários"}), 500
    return jsonify(list_data)