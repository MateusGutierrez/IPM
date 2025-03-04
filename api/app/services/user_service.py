import requests

def fetch_random_user():
    """Faz uma requisição à API Random User e retorna os dados."""
    url = "https://randomuser.me/api/"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Levanta erro se a resposta não for 200
        data = response.json()
        return data.get("results", [])[0]  # Retorna apenas um usuário
    except requests.RequestException as e:
        print(f"Erro ao buscar usuário: {e}")
        return None

def get_listed_users(quantity):
    """Busca uma lista de usuários com a quantidade especificada."""
    url = f"https://randomuser.me/api/?results={quantity}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        # Removendo campos indesejados (login, registered, dob)
        filtered_data = [
            {k: v for k, v in user.items() if k not in ["login", "registered", "dob"]}
            for user in data.get("results", [])
        ]

        return filtered_data
    except requests.RequestException as e:
        print(f"Erro ao buscar lista de usuários: {e}")
        return None