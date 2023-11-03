# Node.js MongoDB Express Starter

A simple Node.js project using Express and MongoDB native drivers.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)


## Introduction

This project serves as a basic starter template for building Node.js applications with Express and MongoDB native drivers.

## Features

- Simple and clean project structure.
- Integration with MongoDB using native drivers.
- Express server setup.
- Included CORS.
- USERS example with CRUD operations.

## Requirements

- Node.js 
- MongoDB 
- Express
- cors 
- dotenv
- nodemon(optional)

## Usage

### Starting the Server

1. Ensure you have Node.js and MongoDB installed on your machine.
2. Clone the repository:

    ```bash
    git clone https://github.com/jafeershaik5/Nodejs-Mongodb.git
    ```

3. Change to the project directory:

    ```bash
    cd Nodejs-Mongodb
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Create a `.env` file in the root of your project and add the MongoDB connection string.

    ```env
    DB_CONFIG=your-mongodb-connection-string
    ```

6. Start the server:

    ```bash
    npm start
    ```

The server will start, and you should see a message indicating that the server is running on the 4040.
you can change the port if you want it run on the another port.

### Making API Requests

The API exposes the following endpoints:

- **GET /users**: This will find all the documents in the collection.
- **POST /users**: This will create a document in the collection.
- **PUT /users**: This will update the document in the collection.
- **GET /users/:id**: This will find the specified Document in the collection.
- **DELETE /users/:id**: This will find and Delete the specified Document in the collection.

#### Example API Request:

Assuming the server is running on `http://localhost:your-server-port`, you can make a GET request using a tool like `curl` or a web browser:

```bash
curl http://localhost:your-server-port/endpoint


