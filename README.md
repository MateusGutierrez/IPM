# Prova Prática - Desenvolvedor Front-end

Este repositório contém a implementação da prova prática de Front-end, utilizando as tecnologias:

- **Front-end:** React com Vite, Tailwind CSS, Zustand, Charts, Zod, React Hook Form, React Router e Shadcn/ui
- **Back-end:** Flask API em Python

## Como Rodar o Projeto

### Front-end

1. Certifique-se de ter o Node.js instalado (recomendado: v18+).
2. Clone o repositório e acesse a pasta do frontend:
   ```sh
   git clone git@github.com:MateusGutierrez/IPM.git
   cd ipm-app
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npm run dev
   ```
5. Acesse no navegador: [http://localhost:5173](http://localhost:5173)

### Back-end

1. Certifique-se de ter o Python 3 instalado.
2. Clone o repositório e acesse a pasta do backend:
   ```sh
   git clone git@github.com:MateusGutierrez/IPM.git
   cd api
   ```
3. Crie um ambiente virtual e ative-o:
   ```sh
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```
4. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```
5. Inicie o servidor Flask:
   ```sh
   python main.py
   ```
6. Acesse a API em: [http://localhost:5000](http://localhost:5000)

## Deploy

### Front-end
O projeto está hospedado em: [https://ipm-app-seven.vercel.app/](https://ipm-app-seven.vercel.app/)

### Back-end
A API está hospedada em: [https://ipm-jsc4.onrender.com/](https://ipm-jsc4.onrender.com/)

## Funcionalidades

### Parte 1: Desenvolvimento de Interface
- Cabeçalho com logo e menu de navegação.
- Seção principal com título, parágrafo e imagem.
- Formulário para nome, e-mail e mensagem.
- Rodapé com links para redes sociais.

### Parte 2: Integração com API RESTful
- API Flask que consome Random User API.
- Exibição de lista de usuários fictícios com nome, e-mail e foto.

### Parte 3: Design
- Mockup desenvolvido no Figma: [Link para o mockup](https://embed.figma.com/design/hlqs1sA2O8KAECjTvzPm7C/ipm-app?embed-host=share)

## Estrutura do Projeto
```
projeto/
├── ipm-app/    # Aplicativo React
├── api/        # API Flask
├── README.md   # Documentação
```

## Tecnologias Utilizadas
### Front-end
- React com Vite
- Tailwind CSS
- Zustand (Gerenciamento de Estado)
- Charts.js (Gráficos)
- Zod + React Hook Form (Validação de formulários)
- React Router (Navegação)
- ShadCN (Componentes UI)

### Back-end
- Flask (API RESTful)
- Requests (Consumo da API Random User)

## Contato
Caso tenha dúvidas ou sugestões, entre em contato:

- **Email:** mateusgutierrez9@gmail.com
- **GitHub:** [https://github.com/MateusGutierrez](https://github.com/MateusGutierrez)

