# A2 Hosting Deployment Guide: React + Django Stack

This guide provides a detailed, step-by-step procedure for deploying your full-stack application (Vite/React frontend and Django backend) on **A2 Hosting** using **cPanel**.

---

## 📋 Prerequisites
1. An active A2 Hosting account with cPanel.
2. Domain or subdomain configured in cPanel (e.g., `astra.zaryz.in`).
3. SSH access enabled on your A2 Hosting account (optional but highly recommended for python library installation).

---

## 🎨 Stage 1: Compiling and Hosting React Frontend

The React app needs to be compiled into static files (HTML, CSS, JS) and uploaded to your domain's web folder.

### 1. Compile the production build locally
In your local terminal, navigate to the `frontend` folder and run the build command:
```bash
cd frontend
npm run build
```
This will compile all React code and bundle it into a new folder named `dist` (located inside `frontend/`).

### 2. Compress the static files
1. Go to `frontend/dist/`.
2. Select all files and folders inside `dist/` (do NOT compress the parent `dist` folder itself, just the contents inside it).
3. Right-click and compress them into a `.zip` archive (e.g., `frontend_build.zip`).

### 3. Upload to cPanel File Manager
1. Log in to your **cPanel**.
2. Open **File Manager** and navigate to your domain/subdomain's document root (for the main domain, this is usually `public_html`).
3. Upload `frontend_build.zip`.
4. Right-click the uploaded zip file and select **Extract**.
5. Once extracted, delete the `.zip` file from the server.

### 4. Create the `.htaccess` Routing Fallback
Since React uses client-side routing (React Router), you must redirect all URL paths back to `index.html` so that refreshing pages (like `/products`) doesn't cause a `404 Not Found` error.

1. Inside your domain's folder (e.g., `public_html`), check if a `.htaccess` file exists. If it does not, click **+ File** at the top left of File Manager to create it.
2. Edit `.htaccess` and paste the following configuration:
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

## 🐍 Stage 2: Hosting the Django Backend via cPanel

A2 Hosting provides an easy interface to run Python/Django backend processes via cPanel and the Passenger WSGI gateway.

### 1. Upload Django Code
1. Locally, zip your `backend` folder (exclude virtual environments like `.venv` or `.git` directories).
2. Go to cPanel **File Manager** and upload the zip file to the root directory (one level above `public_html` for better security, e.g. `/home/username/`).
3. Extract the backend folder. Let's assume your backend directory path is `/home/username/backend`.

### 2. Setup the Python Application in cPanel
1. In the cPanel home page, search for **"Setup Python App"** under the **Software** section.
2. Click **Create Application**.
3. Fill out the application settings:
   * **Python Version:** Select `3.10.x` or `3.11.x` (depending on what matches your requirements).
   * **Application root:** Specify the folder path relative to home where your backend resides (e.g. `backend`).
   * **Application URL:** Select the subdomain/domain path that handles your backend API routes.
   * **Application startup file:** Specify `passenger_wsgi.py` (cPanel will generate this file automatically in your root folder).
4. Click **Create** at the top right.

### 3. Install Package Dependencies
1. Scroll down to the **Configuration files** section on the Python App settings page.
2. Under "pip install package", enter `requirements.txt` and click **Add**.
3. Click **Install** next to it to install your python libraries.
   * *Alternative (Recommended):* Copy the virtual environment activation command shown at the top of the Setup Python App page (e.g., `source /home/username/nodevenv/backend/3.10/bin/activate`). Log in to your server via SSH, paste the command to activate the virtual environment, and run:
     ```bash
     pip install -r requirements.txt
     ```

### 4. Create Database and Run Migrations
1. In cPanel, navigate to **MySQL Database Wizard**.
2. Create a new database, a database user, and assign all privileges. Save the password and database name.
3. Edit the `.env` file inside your server's `backend` folder (using cPanel File Manager edit tool) to configure your database settings:
   * Change `DEBUG` to `False` (for production safety).
   * Set your database credentials (`DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST=localhost`).
   * Set `ALLOWED_HOSTS=['*']` or specify your domains.
4. Run migrations in your activated SSH terminal environment:
   ```bash
   python manage.py migrate
   ```

### 5. Collect Django Static Files (For Admin Panel styling)
To make sure Django's built-in Admin panel style compiles and renders correctly:
1. In your SSH terminal:
   ```bash
   python manage.py collectstatic
   ```
2. In your Django `settings.py`, make sure your `STATIC_URL` is mapped to a path that cPanel can serve publicly (usually `/static/` pointing to a folder inside the domain's document root).

### 6. Connect Django WSGI with Passenger
1. Go to the cPanel **File Manager** and open the `/home/username/backend/passenger_wsgi.py` file.
2. Replace its contents entirely with the following script:
   ```python
   import os
   import sys

   # Add application directory to python search path
   sys.path.insert(0, os.path.dirname(__file__))

   # Set environment variables for Django settings
   os.environ['DJANGO_SETTINGS_MODULE'] = 'astra_website.settings'

   # Import the Django WSGI application handler
   from astra_website.wsgi import application
   ```
3. Save the file.
4. Go back to the **Setup Python App** page in cPanel and click **Restart** on your application.

---

## 🏁 Stage 3: Verification
1. Access your domain (e.g., `http://astra.zaryz.in`) to check that your React frontend loads correctly.
2. Browse to different page subroutes to confirm that the `.htaccess` rewrite rule is correctly routing requests.
3. Verify that your API queries to the Django backend (e.g., admin logins) connect successfully to the database.
