# Astra Technologies — Corporate Web Application

A premium, full-stack enterprise web application built for **Astra Technologies** by Zaryz Solutions LLP. The portal features state-of-the-art biometrics, security inspection, smart entrance control systems, and management software.

Built using a modern stack of **React (Vite)** for a high-performance, dynamic frontend and **Django** for a secure, robust backend.

---

## 📁 Project Structure

```
astra-react-django/
├── frontend/                        # React (Vite) Front-End
│   ├── src/
│   │   ├── components/             # Reusable UI elements (Header, Footer, etc.)
│   │   ├── pages/                  # Page layouts (Home, About, Products, Solutions)
│   │   ├── css/                    # Custom CSS variables, about, solutions, products
│   │   ├── assets/                 # SVGs, icons, and local media assets
│   │   └── App.jsx                 # Client routing, global layouts, and context
│   ├── public/
│   │   ├── images/                 # Product catalogs grouped by category
│   │   │   ├── products/
│   │   │   │   ├── Access Control/ # Access Control banner & product images
│   │   │   │   ├── Armatura/       # Armatura One datasheets & hardware images
│   │   │   │   ├── Software/       # Software datasheets
│   │   │   │   └── ...
│   │   └── pdfs/                   # Technical datasheets and manuals
│   ├── package.json
│   └── vite.config.js
│
├── backend/                         # Django Back-End Application
│   ├── astra_website/              # Server settings & WSGI configuration
│   ├── website/                    # Core Django apps, models, views, and handlers
│   │   ├── static/                 # Collected static files (CSS, JS, media)
│   │   └── templates/              # Base server-rendered HTML pages
│   ├── Dockerfile
│   ├── entrypoint.sh
│   ├── requirements.txt
│   └── manage.py
│
├── docker-compose.yml              # Container environment orchestrator
└── README.md
```

---

## 🚀 Development Setup

### 1. Frontend (React + Vite)
Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
# Navigate to the frontend directory
cd frontend

# Install package dependencies
npm install

# Start the Vite local development server
npm run dev
```
* **Local URL:** `http://localhost:5173`

---

### 2. Backend (Django)
Make sure you have [Python 3.10+](https://www.python.org/) installed.

```bash
# Navigate to the backend directory
cd backend

# Create a Python virtual environment
python -m venv .venv

# Activate the virtual environment
# On Windows:
.venv\Scripts\activate
# On Linux/macOS:
source .venv/bin/activate

# Install the Python package dependencies
pip install -r requirements.txt

# Run migrations to set up the database
python manage.py migrate

# Start the Django local development server
python manage.py runserver
```
* **Local URL:** `http://127.0.0.1:8000`

---

### 3. Docker Deployment (Orchestration)
To build and run the entire stack (both frontend and backend containers) simultaneously:

```bash
# Build and spin up the containers
docker compose up --build
```

---

## 🌐 Deployment to A2 Hosting (cPanel Steps)

### Step 1: Build the React Frontend
1. Navigate to the `frontend` folder locally:
   ```bash
   cd frontend
   ```
2. Run the production compiler:
   ```bash
   npm run build
   ```
3. This creates a `dist` folder. Compress the **contents** of this folder into a `.zip` file.

### Step 2: Upload Frontend to A2 Hosting
1. Log in to your A2 Hosting **cPanel** and open **File Manager**.
2. Navigate to your domain's folder (typically `public_html`).
3. Upload the `.zip` file of the compiled `dist` folder here, then extract it.
4. Add a `.htaccess` file inside `public_html` to prevent `404 Not Found` errors when users refresh React Router subpages:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Step 3: Set Up Django Backend
1. **Upload Code:** Upload your `backend` directory folder (excluding `.venv`, files are uploaded directly to the root of the server, e.g., `/home/username/backend` for security).
2. **Setup Python Application:**
   * In cPanel, search for **"Setup Python App"**.
   * Click **Create Application**.
   * Select **Python Version** (recommended: 3.10 or higher).
   * **Application root:** Point to your uploaded backend folder (e.g., `backend`).
   * **Application URL:** Select the domain/subdomain URL that will serve your API backend.
   * **Application startup file:** Specify `passenger_wsgi.py` (cPanel generates this automatically).
   * Click **Create**.
3. **Configure Dependencies:**
   * Copy the command to enter the virtual environment displayed at the top of the Setup Python App page.
   * Log in to your server via **SSH (Terminal)** and run that command to activate the shell environment.
   * Install python requirements:
     ```bash
     pip install -r requirements.txt
     ```
4. **Deploy Static Assets & Database:**
   * In cPanel, configure a MySQL/PostgreSQL database using the **MySQL Database Wizard**.
   * Update your Django `.env` config with the database credentials and set `DEBUG=False`.
   * Run migrations and collect static files in SSH:
     ```bash
     python manage.py migrate
     python manage.py collectstatic
     ```
5. **WSGI Gateway Configuration:**
   * Edit the `passenger_wsgi.py` file generated in your app root folder to route web requests to your Django project. Replace the contents of `passenger_wsgi.py` with:
     ```python
     import os
     import sys

     # Add your app root to the python path
     sys.path.insert(0, os.path.dirname(__file__))

     # Point to your Django settings module
     os.environ['DJANGO_SETTINGS_MODULE'] = 'astra_website.settings'

     # Import the Django WSGI application handler
     from astra_website.wsgi import application
     ```
   * Go back to cPanel Python App page and click **Restart Application**.

---

## 🛠️ Key Features implemented in the portal
* **Access Control Showcase:** Custom category banners, subcategory navigation overrides, and precise series product filtering.
* **Armatura Integration:** Direct datasheet download cards for Armatura One and layout showcases matching corporate branding.
* **Responsive Sidebar & Navigation:** Sequential category indexing and counting checks in the catalog system.
* **Optimized Image Paths:** Verified casing structures, pathing support, and clean URL names.

---

## 📜 License & Ownership
Copyright © Zaryz Solutions LLP / Astra Technologies. All rights reserved.
