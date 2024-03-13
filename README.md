# User Management API

## Overview

This is a RESTful API built with Node.js, Express, and PostgreSQL. It provides a set of endpoints for managing user data in a PostgreSQL database. The API follows best practices for RESTful design, including the use of HTTP methods, status codes, and URLs.

## Features

- CRUD operations: The API supports creating, reading, updating, and deleting users.
- Error handling: The API provides meaningful error messages when things go wrong.
- Validation: The API validates input data before processing it.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BinodAlgo/users-management-api.git
``` 
2. Install the dependencies:
```sh 
npm install 
```
3. Start the server: 
```sh 
npm run start
``` 

### API Endpoints
Users 
- GET `/users`: Get all users
- POST `/users`: Create a new user
- GET `/users/:id`: Get a user by ID
- PUT `/users/:id`: Update a user by ID
- DELETE `/users/:id`: Delete a user by ID


### Testing 

You can test the API using tools like curl or Postman. Here's an example curl command to perform CURD operations on users:
1. To get all users: 
```sh 
curl -X GET http://localhost:3000/users
```

2. To create a new user:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Jerry", "email":"jerry@example.com"}' http://localhost:3000/users
```

3. To get user by id: 
```sh 
curl -X GET http://localhost:3000/users/1
```

4. To update a user by ID:
```sh
curl -X PUT -H "Content-Type: application/json" -d '{"name":"NewName", "email":"newemail@example.com"}' http://localhost:3000/users/1
```

5. To delete a user by ID:
```bash 
curl -X DELETE -H "Content-Type: application/json" -d '{"name":"NewName", "email":"newemail@example.com"}' http://localhost:3000/users/1
```

### Contributing
Contributions are welcome! Please read the [contributing guide](https://www.dataschool.io/how-to-contribute-on-github/) for more information.


### License
This project is licensed under the MIT License.

### Contact 
If you have any question or feedback, feel free to contact me or [mail me](mailto:achabinod1112@gmail.com). You can also visit my website [here](https://www.binodcodemaster.com) for more contact info.