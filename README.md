# Astra Technologies — Full-Stack Web Application

Comprehensive enterprise web application built with **React (Vite)** frontend and **Django** backend.

---

## 📁 Project Structure

```
astra-react-django/
├── frontend/                        # React (Vite) Front-End
│   ├── src/
│   │   ├── components/             # Reusable UI components (Header, Footer, etc.)
│   │   ├── pages/                  # Page components (Home, About, Products, Solutions)
│   │   ├── css/                    # Custom CSS design system
│   │   └── App.jsx                 # Application entry & router
│   ├── public/
│   │   └── images/                 # Product images & assets
│   ├── package.json
│   └── vite.config.js
│
├── backend/                         # Django Back-End
│   ├── astra_website/              # Django settings & root configuration
│   ├── website/                    # Core Django app (views, models, templates)
│   │   ├── static/                 # Synced static CSS, JS & images
│   │   └── templates/              # Server-rendered HTML templates
│   ├── Dockerfile
│   ├── entrypoint.sh
│   ├── requirements.txt
│   └── manage.py
│
├── docker-compose.yml              # Container orchestration
└── README.md
```

---

## 🚀 Quick Start

### 1. Front-End (React / Vite)

```bash
cd frontend
npm install
npm run dev
```
- **Local URL**: `http://localhost:5173`

---

### 2. Back-End (Django)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
- **Local URL**: `http://127.0.0.1:8000`

---

### 3. Docker Deployment

```bash
docker-compose up --build
```

---

## 🛠️ Main Features & Product Categories

- **Time Attendance Systems**: Biometric, Facial Recognition, RFID, & Smart Terminals.
- **Access Control**: Turnstiles, RFID Readers, Controllers, & Smart Locks.
- **Security & Inspection**: Metal Detectors, X-Ray Scanners, and Entrance Systems.
- **Software Platforms**: Enterprise Attendance, WDMS, & Cafeteria Management.

---

## 📜 License & Ownership
Copyright © Zaryz Solutions LLP / Astra Technologies. All rights reserved.
