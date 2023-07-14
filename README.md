# Wet Bat Travel Agency

Welcome to the Wet Bat Travel Agency project! This repository contains both the frontend and backend code for the Wet Bat Travel Agency prototype. The project was developed as part of a challenge and is hosted using free tier services. You can access it at [https://lucas-barbosa.github.io/wetbat/](https://lucas-barbosa.github.io/wetbat/).

## Index

- [Introduction](#introduction)
- [Live Demo](#computer-live-demo)
- [Project Overview](#eyeglasses-project-overview)
  - [Frontend:](#desktop_computer-frontend)
  - [Backend:](#gear-backend)
- [Getting Started](#grey_question-getting-started)
  - [Prerequisites](#page_facing_up-prerequisites)
  - [Development Setup](#wrench-development-setup)
    - [Database Setup](#game_die-database-setup)
    - [Backend Setup](#gear-backend-setup)
    - [Frontend Setup](#desktop_computer-frontend-setup)
- [Testing](#test_tube-testing)
- [Deployment](#rocket-deployment)

## Introduction

The Wet Bat Travel Agency prototype is a full-stack application that aims to demonstrate the minimal quoting functionality for a travel agency. The project utilizes React for the frontend, Node.js for the backend, and Postgres for the database. The design and details of the prototype can be found in the [challenge-description.pdf](challenge-description.pdf) file within this repository.

## :computer: Live Demo

A live demo of the Wet Bat Travel Agency prototype is available at [https://lucas-barbosa.github.io/wetbat/](https://lucas-barbosa.github.io/wetbat/). Please note that the demo is hosted using free tier services, so performance and availability may vary.

## :eyeglasses: Project Overview
The Wet Bat Travel Agency prototype is built using the following technologies:

### :desktop_computer: Frontend:
* [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
* [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
* [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
* [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
* [![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)](https://tanstack.com/query/v3/)

### :gear: Backend:
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
* [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
* [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
* [![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

The project utilizes a Dockerized development environment using docker-compose to run the services. However, it is also possible to run the services separately without Docker by configuring the required environment variables.

The backend is developed following the principles of **Clean Architecture**. This approach provides several benefits, including:

- **Separation of Concerns**: Clean Architecture promotes modularity and separates business logic from external dependencies, making the codebase more maintainable and testable.
- **Flexibility**: The architecture allows for easy swapping of libraries and frameworks, such as using Koa instead of Express or TypeORM instead of Prisma, without affecting the core business logic.
- **Testability**: Clean Architecture encourages writing testable code, making it easier to write unit tests for business rules and application logic.

## :grey_question: Getting Started
### :page_facing_up: Prerequisites
To run the project, ensure you have the following installed:

- Docker and docker-compose (if running with Docker)
- Node.js (if running services separately)
- PostgreSQL (if running services separately)

### :wrench: Development Setup
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

#### :game_die: Database Setup

1. Start a PostgreSQL database:

- You can start a PostgreSQL database using Docker with the following command:
```bash
docker run -d --name wetbat-db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres:latest
```
This command starts a PostgreSQL container named "wetbat-db" with the password "mysecretpassword" and exposes port 5432.


#### :gear: Backend Setup

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

#### :desktop_computer: Frontend Setup
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

## :test_tube: Testing
The project includes unit tests for the backend services implemented using Jest. To run the tests, follow these steps:

1. Change to the backend directory:

```bash
cd wetbat/backend
```

2. Run the tests:

```bash
yarn test
```

## :rocket: Deployment

The Wet Bat Travel Agency project is deployed using the following services:

- Backend: [Render](https://render.com) (from the Dockerfile)
- Frontend: [GitHub Pages](https://pages.github.com)
- Database: PostgreSQL on [Supabase](https://supabase.io)

The backend is deployed on Render using the Dockerfile provided in the repository. The frontend is deployed on GitHub Pages, and the database uses PostgreSQL provided by Supabase.
