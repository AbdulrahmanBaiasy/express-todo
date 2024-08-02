# Express Todo App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
![Express](https://img.shields.io/badge/Express.js-brightgreen.svg) 
![Docker](https://img.shields.io/badge/Docker-blue.svg)

This is a Todo application built with Express.js and MongoDB. It provides a RESTful API for managing tasks, including creating, reading, updating, and deleting tasks.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB running locally or in a Docker container
- Docker (optional, for using Docker Compose)

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/AbdulrahmanBaiasy/express-todo.git
  cd express-todo
```

2. Install the dependencies:

```bash
  npm install
```

3. Set up the MongoDB database.

   You can either run MongoDB locally or use Docker Compose:
   Using Docker Compose:

```bash
  docker-compose up
```

4. Run the application: 
```bash
  npm run start
```


## API Endpoints
The application provides the following API endpoints:

- GET /tasks: Retrieves all tasks.

- POST /tasks: Creates a new task.

- PUT /tasks/: Updates an existing task by ID.

- DELETE /tasks/: Deletes a task by ID.


## Project Structure

  ├─ models/
  │  └─ task.js
  ├─node_modules/ (ignored)
  ├─ routes/
  │  └─ taskRoutes.js
  ├─ .gitignore
  ├─ app.js
  ├─ docker-compose.yml
  ├─ package-lock.json
  ├─ package.json
  └─ readme.md


## License

This script is provided under the MIT License. Feel free to use, modify, and distribute it as needed.