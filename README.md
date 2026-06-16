# Astra React + Django

Full-stack structure for the Astra Technologies website.

```
astra-react-django/
├─ frontend/                        # React (Vite) front-end
│   ├─ package.json
│   ├─ vite.config.js
│   ├─ index.html                   # Vite root HTML
│   ├─ src/
│   │   ├─ index.jsx                # React entry point
│   │   ├─ App.jsx
│   │   ├─ components/
│   │   │   ├─ header.html          # Original header fragment (reference)
│   │   │   └─ footer.html          # Original footer fragment (reference)
│   │   └─ assets/
│   │       ├─ js/                  # Original JS files (unchanged)
│   │       │   ├─ about.js
│   │       │   ├─ home.js
│   │       │   ├─ nav.js
│   │       │   ├─ products.js
│   │       │   └─ solutions.js
│   │       └─ css/                 # Original CSS files (unchanged)
│   │           ├─ base.css
│   │           ├─ about.css
│   │           ├─ home.css
│   │           ├─ products.css
│   │           └─ solutions.css
│   └─ public/
│       ├─ index.html               # Home page (static reference)
│       ├─ about.html
│       ├─ products.html
│       └─ solutions.html
│
├─ backend/                         # Django back-end
│   ├─ manage.py
│   ├─ astra_website/               # Django project package
│   │   ├─ __init__.py
│   │   ├─ settings.py
│   │   ├─ urls.py
│   │   └─ wsgi.py
│   └─ website/                     # Django app
│       ├─ __init__.py
│       ├─ admin.py
│       ├─ apps.py
│       ├─ models.py
│       ├─ views.py                 # Renders HTML templates
│       ├─ urls.py                  # App URL patterns
│       ├─ templates/               # HTML templates (unchanged)
│       │   ├─ index.html
│       │   ├─ about.html
│       │   ├─ products.html
│       │   ├─ solutions.html
│       │   └─ components/
│       │       ├─ header.html
│       │       └─ footer.html
│       └─ static/                  # Static files served by Django
│           ├─ js/
│           │   ├─ about.js
│           │   ├─ home.js
│           │   ├─ nav.js
│           │   ├─ products.js
│           │   └─ solutions.js
│           └─ css/
│               ├─ base.css
│               ├─ about.css
│               ├─ home.css
│               ├─ products.css
│               └─ solutions.css
│
└─ README.md
```

---

## Running the Front-End (React / Vite)

```bash
cd frontend
npm install
npm run dev
```

Visit: http://localhost:5173

---

## Running the Back-End (Django)

> **Prerequisites**: Python 3.10+, Django installed (`pip install django`)

```bash
cd backend
python manage.py migrate
python manage.py runserver
```

Visit: http://127.0.0.1:8000

Pages available:
- `/`           → Home
- `/about/`     → About Us
- `/products/`  → Products
- `/solutions/` → Solutions
- `/admin/`     → Django Admin
