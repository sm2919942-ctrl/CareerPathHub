# CareerMart – Full Stack Career Guidance Platform

CareerMart is a full-stack career guidance web application designed to help students explore career opportunities after 10th, 12th, and graduation.

The platform provides information about courses, eligibility, entrance exams, career profiles, government and private sector opportunities, and career roadmaps.

## Features

- Student Registration and Login
- Personalized Student Dashboard
- Career & Course Catalogue
- Career Search and Filtering
- Detailed Course Information
- Eligibility and Entrance Exam Information
- Career Roadmaps
- Government & Private Sector Scope
- Save / Wishlist Career Options
- Career Management CRUD APIs
- Responsive Education-Themed UI
- MySQL Database Integration

## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Lucide React

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- Maven

### Database
- MySQL

### Tools
- VS Code
- IntelliJ IDEA
- MySQL Workbench
- Postman
- Git
- GitHub

## Project Structure

CareerMart/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   └── pom.xml
│
└── README.md

## Main Modules

### Student Authentication
Students can create an account and log in to access their personalized dashboard.

### Career Explorer
Students can explore career options based on their educational background and stream.

### Career Details
Each career contains information about duration, fees, eligibility, entrance exams, subjects, job profiles and future scope.

### Saved Careers
Logged-in students can save career options for future reference.

### Career Management
REST APIs provide CRUD operations for managing career information.

## Backend API Examples

POST /api/users/register

POST /api/users/login

GET /api/careers

GET /api/careers/{id}

POST /api/careers

PUT /api/careers/{id}

DELETE /api/careers/{id}

POST /api/saved

GET /api/saved/{userId}

## Database Tables

- users
- careers
- saved_careers

## Future Improvements

- Secure authentication using Spring Security and JWT
- Advanced course comparison
- College information module
- Deployment to cloud infrastructure

## Author

Suman Saurabh

B.Tech – Computer Science & Engineering