from flask import Flask
from flask_cors import CORS
from app.routes.user_routes import user_bp, list_bp

app = Flask(__name__)

# Liberar CORS para todas as rotas e origens
CORS(app)

# Registrar blueprints (rotas)
app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(list_bp, url_prefix="/list")

if __name__ == "__main__":
    app.run(debug=True)
