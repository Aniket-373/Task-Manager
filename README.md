---

# Task Manager App

This is a simple Task Manager application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to create, view, update, and delete tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Task**: Add new tasks to the list.
- **View Tasks**: View a list of all tasks.
- **Update Task**: Edit existing tasks.
- **Delete Task**: Remove tasks from the list.
- **Mark Task as Completed**: Mark tasks as done.
- **Responsive Design**: The app is mobile-friendly and responsive.

## Installation

### Prerequisites

Make sure you have the following installed on your local development machine:

- Node.js (v14 or above)
- MongoDB (local instance or MongoDB Atlas)
- npm (Node Package Manager) or yarn

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/task-manager-app.git
    cd task-manager-app
    ```

2. **Install Server Dependencies**

    ```bash
    cd server
    npm install
    ```

3. **Install Client Dependencies**

    ```bash
    cd ../client
    npm install
    ```

4. **Set Up Environment Variables**

   Create a `.env` file in the `server` directory and add the following:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=1000
   ```

5. **Run the Application**

    **Backend (Server):**

    ```bash
    cd server
    npm start
    ```

    **Frontend (Client):**

    ```bash
    cd ../client
    npm start
    ```

    The app should now be running on `http://localhost:1000`.

## Usage

- To add a new task, fill in the task description and click "Add Task."
- Tasks can be marked as completed by clicking the checkbox next to the task.
- To edit a task, click on the task description, make the necessary changes, and save.
- Tasks can be deleted by clicking the delete icon.

## API Endpoints

### Base URL: `/api/tasks`

- **GET /tasks**
  - Retrieve a list of all tasks.

- **GET /tasks/:id**
  - Retrieve a single task by its ID.

- **POST /tasks**
  - Create a new task.
  - Request body:
    ```json
    {
      "description": "Your task description here",
      "completed": false
    }
    ```

- **PATCH /tasks/:id**
  - Update a task.
  - Request body (example):
    ```json
    {
      "description": "Updated task description",
      "completed": true
    }
    ```

- **DELETE /tasks/:id**
  - Delete a task by its ID.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - CSS (or your choice of CSS framework)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)

- **Development Tools:**
  - Visual Studio Code
  - Postman (for API testing)
  - Git & GitHub

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
