# Chat de Atendimento – Teste Técnico 4blue  
### por Enzo Barbosa

---

## Sobre o Projeto  
Este repositório contém a implementação do desafio técnico proposto pela **4blue**, envolvendo a construção de um sistema completo de **chat com histórico filtrado por usuário**, utilizando **Django (backend)** e **React (frontend)**.

O foco principal do desafio é demonstrar:
- Boas práticas de código  
- Organização da aplicação  
- Filtragem de dados por usuário  
- Comunicação entre frontend e backend  
- Modelagem adequada no Django  
- Clareza e qualidade do README  

---

# **1. Funcionalidades**

###  Chat
- Envio de perguntas pelo usuário ativo.
- Respostas mockadas automáticas.
- Chat mostra **somente mensagens da sessão atual** (não persistidas visualmente após sair).

### Histórico
- Mostra **apenas as mensagens persistidas do usuário ativo**.
- Banco de dados filtra por parâmetro (`?user=A` ou `?user=B`).
- Rolagem interna para grandes volumes de dados.

### Usuários
- Alternância direta entre **Usuário A** e **Usuário B**.
- Todo o histórico e chat reagem à troca de usuário.

### Interface
- Tema escuro completo.
- Layout responsivo e moderno.
- Componentes organizados e estilizados em um único `styles.css`.

### Tecnologias
**Backend:**
- Python 3+
- Django
- Django REST Framework
- SQLite

**Frontend:**
- React (Vite)
- Context API
- Axios

---

# **2. Como Rodar o Projeto**

##  **Backend (Django)**

cd backend
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
O backend subirá em:
 http://127.0.0.1:8000

## **Frontend (React)8**

cd frontend
npm install
npm run dev
O frontend subirá em:
http://localhost:5173/

# 3. Estrutura da Aplicação

teste-4blue/
│
├── backend/
│   ├── chat/
│   │   ├── models.py
│   │   ├── views.py
│   │   └── serializers.py
│   ├── config/
│   ├── db.sqlite3
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Chat/
│   │   │   ├── History/
│   │   │   ├── Home/
│   │   │   └── Layout/
│   │   ├── Context/
│   │   ├── api.js
│   │   └── styles.css
│   └── index.html
│
└── README.md

# 4. Modelagem do Banco

O model principal é simples e direto:

class Message(models.Model):
    user = models.CharField(max_length=1)  # 'A' ou 'B'
    question = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
✓ Cumpre todos os requisitos
✓ Facilita filtros por usuário
✓ Simples e eficiente para o escopo do teste

# 5. Lógica de Negócio (Filtragem por Usuário)
A view principal aceita o parâmetro:

GET /api/messages/?user=A
GET /api/messages/?user=B
Somente os registros do usuário correspondente são retornados.

Esse é o requisito principal do teste e está implementado corretamente tanto no backend quanto no frontend.

Desenvolvido por
Enzo Barbosa
