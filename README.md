# Wet Bat Travel Agency

Welcome to the Wet Bat Travel Agency project! This repository contains both the frontend and backend code for the Wet Bat Travel Agency prototype. The project was developed as part of a challenge and is hosted using free tier services. You can access it at [https://lucas-barbosa.github.io/wetbat/](https://lucas-barbosa.github.io/wetbat/).

## Index

- [Wet Bat Travel Agency](#wet-bat-travel-agency)
  - [Index](#index)
  - [Introduction](#introduction)
  - [Live Demo](#live-demo)
  - [Project Overview](#project-overview)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Development Setup](#development-setup)
      - [Database Setup](#database-setup)
      - [Backend Setup](#backend-setup)
      - [Frontend Setup](#frontend-setup)
  - [Testing](#testing)
  - [Deployment](#deployment)

## Introduction

The Wet Bat Travel Agency prototype is a full-stack application that aims to demonstrate the minimal quoting functionality for a travel agency. The project utilizes React for the frontend, Node.js for the backend, and Postgres for the database. The design and details of the prototype can be found in the [challenge-description.pdf](challenge-description.pdf) file within this repository.

## Live Demo

A live demo of the Wet Bat Travel Agency prototype is available at [https://lucas-barbosa.github.io/wetbat/](https://lucas-barbosa.github.io/wetbat/). Please note that the demo is hosted using free tier services, so performance and availability may vary.

## Project Overview
The Wet Bat Travel Agency prototype is built using the following technologies:

### Frontend:
- React: A popular JavaScript library for building user interfaces.
- Vite: A fast build tool that provides a lightning-fast development experience for modern web projects.
- Tailwind CSS: A utility-first CSS framework that allows for rapid UI development.
- TypeScript: A statically-typed superset of JavaScript that enhances developer productivity and code quality.
- React Query: A data fetching and state management library for React applications.

### Backend:
- Node.js: A JavaScript runtime that allows you to build scalable and performant server-side applications.
- Express: A fast and minimalist web application framework for Node.js.
- TypeScript: A statically-typed superset of JavaScript that enhances developer productivity and code quality.
- Prisma: A modern database toolkit that provides an ORM (Object-Relational Mapping) for working with databases.
- Jest: A JavaScript testing framework for writing unit tests.

The project utilizes a Dockerized development environment using docker-compose to run the services. However, it is also possible to run the services separately without Docker by configuring the required environment variables.

The backend is developed following the principles of **Clean Architecture**. This approach provides several benefits, including:

- **Separation of Concerns**: Clean Architecture promotes modularity and separates business logic from external dependencies, making the codebase more maintainable and testable.
- **Flexibility**: The architecture allows for easy swapping of libraries and frameworks, such as using Koa instead of Express or TypeORM instead of Prisma, without affecting the core business logic.
- **Testability**: Clean Architecture encourages writing testable code, making it easier to write unit tests for business rules and application logic.

## Getting Started
### Prerequisites
To run the project, ensure you have the following installed:

- Docker and docker-compose (if running with Docker)
- Node.js (if running services separately)
- PostgreSQL (if running services separately)

### Development Setup
With Docker

1. Clone the repository:

```bash
git clone https://github.com/lucas-barbosa/wetbat.git
```

2. Change to the project directory:
```bash
cd wetbat
```

3. Start the services using Docker Compose:
```bash
docker-compose up -d
```

4. Access the frontend application at http://localhost:5000/wetbat

Running Services Separately

#### Database Setup

1. Start a PostgreSQL database:

- You can start a PostgreSQL database using Docker with the following command:
```bash
docker run -d --name wetbat-db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres:latest
```
This command starts a PostgreSQL container named "wetbat-db" with the password "mysecretpassword" and exposes port 5432.


#### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/lucas-barbosa/wetbat.git
```

2. Change to the backend directory:

```bash
cd wetbat/backend
```

3. Install dependencies:

```bash
yarn install
```

4. Set the required environment variables by creating a .env file based on the provided .env.example file.
- Add the following line to the `.env` file, replacing the value with the appropriate connection string for your PostgreSQL database (this example uses the connection string from the database created previously):
```bash
DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/wetbat-db
```

1. Run database migrations:

```bash
yarn prisma migrate deploy
```

6. Start the backend server:

```bash
yarn dev
```

#### Frontend Setup
1. Change to the frontend directory:

```bash
cd wetbat/frontend
```

2. Install dependencies:

```bash
yarn install
```

3. Set the VITE_BACKEND_URL environment variable in a .env file to the backend URL (http://localhost:8080 if running the backend with Docker).

4. Start the frontend development server:

```bash
yarn dev
```

5. Access the frontend application at http://localhost:5173/wetbat.

## Testing
The project includes unit tests for the backend services implemented using Jest. To run the tests, follow these steps:

1. Change to the backend directory:

```bash
cd wetbat/backend
```

2. Run the tests:

```bash
yarn test
```

## Deployment

The Wet Bat Travel Agency project is deployed using the following services:

- Backend: [Render](https://render.com) (from the Dockerfile)
- Frontend: [GitHub Pages](https://pages.github.com)
- Database: PostgreSQL on [Supabase](https://supabase.io)

The backend is deployed on Render using the Dockerfile provided in the repository. The frontend is deployed on GitHub Pages, and the database uses PostgreSQL provided by Supabase.
