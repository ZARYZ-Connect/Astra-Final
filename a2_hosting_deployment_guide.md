# Complete A2 Hosting Deployment Guide: React + Django Stack + Webmail SMTP

This guide provides a complete, step-by-step procedure for deploying your full-stack application (React/Vite frontend, Django backend API, database, and A2 Hosting Webmail SMTP contact form notification system) on **A2 Hosting (cPanel)**.

---

## 📋 Table of Contents
1. [Prerequisites](#-prerequisites)
2. [Stage 1: A2 Hosting Webmail Setup (Email & SMTP)](#-stage-1-a2-hosting-webmail-setup-email--smtp)
3. [Stage 2: Compiling & Deploying React Frontend](#-stage-2-compiling--deploying-react-frontend)
4. [Stage 3: Setting Up Django Backend on cPanel](#-stage-3-setting-up-django-backend-on-cpanel)
5. [Stage 4: Configuring Database & Backend Environment (.env)](#-stage-4-configuring-database--backend-environment-env)
6. [Stage 5: Final Verification & Testing](#-stage-5-final-verification--testing)

---

## 📋 Prerequisites
1. An active A2 Hosting account with cPanel access.
2. Registered domain or subdomain pointing to A2 Hosting nameservers (e.g., `astratechnologies.in` or `astra.zaryz.in`).
3. SSH access enabled in cPanel (optional but recommended for running commands quickly).

---

## ✉️ Stage 1: A2 Hosting Webmail Setup (Email & SMTP)

To ensure that website inquiries submitted via the Contact form automatically send notification emails to your inbox (`sales@astratechnologies.in`), set up an email account in cPanel:

### 1. Create the Webmail Email Account
1. Log in to your **A2 Hosting cPanel**.
2. Under the **Email** section, click **Email Accounts**.
3. Click **+ Create** on the right side.
4. Fill in the details:
   - **Domain:** Select your domain (e.g., `astratechnologies.in`).
   - **Username:** `sales` (This creates `sales@astratechnologies.in`).
   - **Password:** Enter a strong password (save this password safely!).
5. Click **Create**.

### 2. Obtain A2 Hosting SMTP Client Settings
1. On the **Email Accounts** page in cPanel, find `sales@astratechnologies.in` and click **Connect Devices**.
2. Look for **Secure SSL/TLS Settings (Recommended)**:
   - **Outgoing Server / SMTP Host:** `mail.astratechnologies.in` (or your A2 server hostname e.g. `a2ss15.a2hosting.com`)
   - **SMTP Port:** `587` (TLS/STARTTLS) or `465` (SSL)
   - **Username:** `sales@astratechnologies.in`
   - **Password:** The password set during email creation.

*(Keep these credentials handy; you will paste them into the backend `.env` file in Stage 4).*

---

## 🎨 Stage 2: Compiling & Deploying React Frontend

### 1. Build Production Bundle Locally
In your local project terminal, navigate to the `frontend` folder and run:
```bash
cd frontend
npm run build
```
This compiles all React components and outputs production static files inside `frontend/dist/`.

### 2. Compress Build Output
1. Navigate into `frontend/dist/`.
2. Select all files and folders *inside* `dist/` (index.html, assets/, images/, pdfs/).
3. Right-click and compress them into a `.zip` archive (e.g., `dist.zip`).

### 3. Upload to cPanel File Manager
1. In cPanel, open **File Manager**.
2. Navigate to your domain's document root folder (usually `public_html` for your primary domain, or `public_html/subdomain`).
3. Click **Upload** and upload `dist.zip`.
4. Right-click `dist.zip` and select **Extract**.
5. Delete `dist.zip` after extraction.

### 4. Configure `.htaccess` for React Router Client-Side Routing
Create or edit the `.htaccess` file inside `public_html` to prevent `404 Not Found` errors when users refresh React Router subpages:

1. In cPanel File Manager, ensure hidden files are visible (Click **Settings** at top right -> check **Show Hidden Files (dotfiles)**).
2. Create or edit `.htaccess` in `public_html` and paste:
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
3. Save changes.

---

## 🐍 Stage 3: Setting Up Django Backend on cPanel

### 1. Upload Django Backend Code
1. Zip your local `backend` folder (exclude `.venv` or temporary files).
2. In cPanel **File Manager**, upload the zip file into your account root directory (e.g., `/home/username/backend` — placing it outside `public_html` protects your Python code).
3. Extract the zip file so the path is `/home/username/backend`.

### 2. Create Python Application in cPanel
1. In cPanel home, search for **Setup Python App** under **Software**.
2. Click **Create Application**.
3. Fill in the parameters:
   - **Python Version:** Select `3.10.x` or `3.11.x`.
   - **Application root:** `backend`
   - **Application URL:** Select your domain/subdomain path.
   - **Application startup file:** `passenger_wsgi.py`
4. Click **Create**.

### 3. Install Python Dependencies
1. Copy the virtual environment activation command displayed at the top of the Setup Python App page (e.g., `source /home/username/nodevenv/backend/3.10/bin/activate`).
2. Open SSH terminal (or cPanel Terminal) and paste the activation command.
3. Install project dependencies:
   ```bash
   pip install -r requirements.txt
   ```

---

## ⚙️ Stage 4: Configuring Database & Backend Environment (.env)

### 1. Configure Backend `.env` File
In cPanel File Manager, navigate to `/home/username/backend/` and edit the `.env` file (or create one by copying `.env.example`):

```env
DEBUG=False
SECRET_KEY=your-secure-random-secret-key
ALLOWED_HOSTS=astratechnologies.in,www.astratechnologies.in,astra.zaryz.in,localhost,127.0.0.1

# SMTP Email Configuration (A2 Hosting Webmail)
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=mail.astratechnologies.in
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_USE_SSL=False
EMAIL_HOST_USER=sales@astratechnologies.in
EMAIL_HOST_PASSWORD=your_actual_webmail_password_here
DEFAULT_FROM_EMAIL=sales@astratechnologies.in
RECIPIENT_EMAIL=sales@astratechnologies.in

# CORS Settings
CORS_ALLOWED_ORIGINS=https://astratechnologies.in,https://www.astratechnologies.in,https://astra.zaryz.in
```

### 2. Run Database Migrations
In your SSH / cPanel terminal (with virtual environment active):
```bash
python manage.py migrate
python manage.py collectstatic --noinput
```

### 3. Configure Passenger WSGI Gateway
In cPanel File Manager, open `/home/username/backend/passenger_wsgi.py` and replace its entire contents with:

```python
import os
import sys

# Add backend directory to Python path
sys.path.insert(0, os.path.dirname(__file__))

# Point to Django settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'astra_website.settings'

# Import WSGI application handler
from astra_website.wsgi import application
```

### 4. Restart Python App
Go back to the **Setup Python App** page in cPanel and click **Restart**.

---

## 🏁 Stage 5: Final Verification & Testing

1. **Verify Frontend**: Visit `https://astratechnologies.in` in your browser. Confirm all pages, branding, and images render properly.
2. **Test Contact Form**:
   - Go to the **Contact Us** page (`/contact`).
   - Fill out the inquiry form (Name, Phone, Email, Company, Service, Message) and click **Send Message**.
   - Confirm the UI displays **Message Sent!**.
3. **Verify Database Storage**:
   - Access Django Admin at `https://astratechnologies.in/admin/`.
   - Log in and verify that the submission appears under **Contact Submissions**.
4. **Verify Email Dispatch**:
   - Open Webmail (`https://astratechnologies.in/webmail`) or your email client for `sales@astratechnologies.in`.
   - Confirm the automated inquiry notification email has been received!

