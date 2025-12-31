# 📘 REACT_LARAVEL_ARTICLES

A full-stack web application built using **ReactJS (Frontend)** and **Laravel (Backend REST API)** that fetches and displays **original and enhanced articles** in a responsive, professional user interface.


## 📌 Project Overview

REACT_LARAVEL_ARTICLES demonstrates a modern decoupled full-stack architecture where:

- React handles UI rendering and user interaction
- Laravel serves data through RESTful APIs
- Frontend and backend communicate using HTTP (JSON)
- Backend logic and database access are fully isolated from the UI

---

## 🧱 Tech Stack

### Frontend
- ReactJS
- JavaScript
- Axios

### Backend
- Laravel 12
- PHP 8.2
- MySQL
- REST API

---

## 🚀 Setup Instructions

### Backend (Laravel)

```bash
cd C:\xampp\htdocs\laravel-api
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

Backend runs at: http://localhost:8000

---

### Frontend (React)

```bash
cd react-laravel-articles
npm install
npm start
```

Frontend runs at: http://localhost:3000

---

## 🔌 API Endpoints

- GET /api/articles
- GET /api/articles/enhanced

---

## 🔁 Data Flow

React UI → Axios → Laravel API → Controller → Model → Database → JSON → React UI





---

## 👤 Author

Mohan Ramavath

---
