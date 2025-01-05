# React + TypeScript + Flask Template

## Overview

This project provides a full-stack template for building applications with:

- **Frontend**: React + TypeScript, styled with Tailwind CSS and DaisyUI.
- **Backend**: Flask, Python, with a RESTful API.

## Features

- **React with TypeScript**: Strongly-typed JavaScript for safer and scalable applications.
- **Flask**: Lightweight and fast backend framework for building APIs.
- **Python**: A powerful and versatile programming language for backend development.
- **Postman**: Simplifies API development and testing workflows.
- **GraphQL**: Enables flexible and efficient API querying.
- **Vite**: A modern build tool with lightning-fast development and production builds.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **DaisyUI**: Pre-styled, customizable components built on Tailwind CSS.

---

## Prerequisites

- **Node.js** and **npm** or **yarn** (for the frontend).
- **Python 3.x** and **pip** (for the backend).
- A virtual environment for Python (recommended).

---

## Project Structure

```bash
root/
├── backend/           # Flask backend
│   ├── app.py         # Main Flask application
│   ├── requirements.txt # Python dependencies
│   ├── templates/     # HTML templates (if needed)
│   ├── static/        # Static assets (if needed)
│   ├── venv/          # Virtual Environment
├── frontend/          # React frontend
│   ├── src/           # React source code
│   ├── dist/          # Vite build process production ready files
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── tsconfig.json  # TypeScript configuration
│   ├── postcss.config.js # PostCSS, used by Tailwind CSS
│   ├── vite.config.ts # Vite, build and dev settings
│   ├── components # Reusable Atomic UI components, further divided into atoms, molecules, and organisms.
│   ├── services # API services or external integrations (e.g., apolloClient.ts for GraphQL queries).
│   ├── index.css # Main CSS file for global styles
│   ├── App.tsx # Main React component that defines the app structure and routing.
│   ├── main.tsx # Entry point - Renders the root component (App.tsx)


---
```

## Setup Instructions

### Backend Setup

1. **Navigate to the `backend` directory**:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the Flask app:

```bash
flask run
```

The backend will be available at <http://127.0.0.1:5000>.

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The frontend will be available at <http://localhost:3000>.

### Deployment

1. Install Gunicorn (for production environments):

  ```bash
  pip install gunicorn
  ```

2. Deploy the backend to a cloud platform (e.g., AWS, Heroku).

### Frontend Deployment

1. Build the frontend:

  ```bash
  npm run build
  ```

2. Deploy the dist/ folder to a static hosting platform, such as:

 • Netlify
 • Vercel

#### Customization

#### Backend Technologies

 • Update routes and logic in app.py.

#### Frontend Technologies

 • Modify global styles in index.css.
 • Update Tailwind configuration in tailwind.config.js.

#### Technologies Used

#### Frontend

  • React
  • TypeScript
  • Tailwind CSS
  • DaisyUI
  
#### Backend

  • Flask
  • Python
  • Postman
  • GraphQL

### Contribution

Contributions are welcome! Follow these steps to contribute:

 1. Fork the repository.

 2. Create a new branch for your feature:
