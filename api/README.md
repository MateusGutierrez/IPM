# Random User API - Flask

Este projeto consome a API [Random User](https://randomuser.me/api/) utilizando Flask.

## 🛠️ Tecnologias Utilizadas
- Python 3
- Flask
- Requests

## 📋 Requisitos
- Ter o **Python 3** instalado.
- Ter o **pip** (gerenciador de pacotes do Python) instalado.

## 🚀 Instalação e Execução

### 1️⃣ Clone este repositório
```sh
git clone https://github.com/MateusGutierrez/IPM
cd api
```

### 2️⃣ Crie um ambiente virtual
```sh
python -m venv venv
```

### 3️⃣ Ative o ambiente virtual
**Windows:**
```sh
venv\Scripts\activate
```
**Linux/Mac:**
```sh
source venv/bin/activate
```

### 4️⃣ Instale as dependências
```sh
pip install -r requirements.txt
```

### 5️⃣ Execute o projeto
```sh
python app.py
```

O servidor Flask será iniciado e estará disponível em `http://127.0.0.1:5000/`.

## 📌 Endpoints Disponíveis

### 🔹 Obter um usuário aleatório
**Rota:**
```
GET /user
```
**Retorno esperado:**
```json
{
  "cell": "(352) 528-3454",
  "dob": {
    "age": 53,
    "date": "1971-12-06T02:37:01.108Z"
  },
  "email": "genesis.martin@example.com",
  "gender": "female",
  "id": {
    "name": "SSN",
    "value": "196-77-6108"
  },
  "location": {
    "city": "Forney",
    "coordinates": {
      "latitude": "87.9276",
      "longitude": "7.4379"
    },
    "country": "United States",
    "postcode": 90550,
    "state": "Nebraska",
    "street": {
      "name": "Mockingbird Ln",
      "number": 9215
    },
    "timezone": {
      "description": "Ekaterinburg, Islamabad, Karachi, Tashkent",
      "offset": "+5:00"
    }
  },
  "login": {
    "md5": "68ce3068af800f6a39c1535d3ff4971d",
    "password": "vvvvvv",
    "salt": "jp0GGfrZ",
    "sha1": "10cef2e1fd74fd928e4928e0d4d0e71c909b1b2c",
    "sha256": "f0186c93f8a74829b27ecfafbb2f6c643990322121fbd0918bef65cf47b76c2d",
    "username": "redkoala735",
    "uuid": "58dbe858-e24f-4881-8dfa-6b7f0d6501c4"
  },
  "name": {
    "first": "Genesis",
    "last": "Martin",
    "title": "Ms"
  },
  "nat": "US",
  "phone": "(843) 217-2320",
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/2.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
  },
  "registered": {
    "age": 3,
    "date": "2021-09-21T03:23:56.258Z"
  }
}
```

### 🔹 Obter uma lista de usuários sem campos sensíveis
**Rota:**
```
GET /list?quantity=10
```
**Parâmetros:**
- `quantity` (opcional, padrão: `100`) - Define quantos usuários serão retornados.

**Retorno esperado:**
```json
[
  {
  "cell": "(352) 528-3454",
  "email": "genesis.martin@example.com",
  "gender": "female",
  "id": {
    "name": "SSN",
    "value": "196-77-6108"
  },
  "location": {
    "city": "Forney",
    "coordinates": {
      "latitude": "87.9276",
      "longitude": "7.4379"
    },
    "country": "United States",
    "postcode": 90550,
    "state": "Nebraska",
    "street": {
      "name": "Mockingbird Ln",
      "number": 9215
    },
    "timezone": {
      "description": "Ekaterinburg, Islamabad, Karachi, Tashkent",
      "offset": "+5:00"
    }
  },
  "name": {
    "first": "Genesis",
    "last": "Martin",
    "title": "Ms"
  },
  "nat": "US",
  "phone": "(843) 217-2320",
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/2.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
  },
  ...
}
]
```

## 🔄 Dependências
O projeto utiliza a biblioteca `requests` para consumir a API. As dependências estão no `requirements.txt`:
```txt
Flask
requests
```