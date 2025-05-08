# 🛠️ Gear Up Backend - Bike Service Center API

**Gear Up Backend** is a robust RESTful API built for bike service center management. It helps garages and workshops easily manage customers, bikes, and service records. Powered by modern tools like Node.js, Express.js, TypeScript, Prisma, and PostgreSQL, it's designed for scalability and ease of use.

---

## 🌐 Live API

> 🔗 [Gear Up Live Backend](https://-a8.vercel.app/)

---

## ⚙️ Tech Stack

- **Backend Framework**: Node.js, Express.js, TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Validation**: Zod _(optional)_
- **Deployment**: Render / Railway
- **Error Handling**: Centralized Global Error Handler

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

````bash
git clone https://github.com/trrabby/GearUp-Backend.git
cd GearUp-Backend

### 2. Install Dependencies
```bash

npm install

### 3. Environment Configuration
Create a .env file in the root directory and add the following:

env

PORT=3000
DATABASE_URL=your_postgres_database_url
NODE_ENV=development

### 4. Generate Prisma Client
```bash

npx prisma generate

### 5. Run Database Migrations
```bash

npx prisma migrate dev --name init

### 6. Start the Development Server
```bash

npm run dev
````

### 🔑 Features

Customer Management – Full CRUD operations for customer profiles.

Bike Registration – Assign and manage bikes under each customer.

Service History Tracking – Log services with time-stamped records.

Error Handling – Centralized error response structure for easier debugging.

Modular Codebase – Clean separation of logic using controller-service-route layers.
