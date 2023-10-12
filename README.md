# Node.js Express SQLite CRUD API

This is a simple Node.js application that provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations using the Express framework and SQLite as the database.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/amjidalishah/node-express-sqlite-crud.git
cd node-express-sqlite-crud
```

2. Install project dependencies:

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

The server will start on port 3000 by default. You can access the API at http://localhost:3000.

Usage
API Endpoints

1. Create a User
   Endpoint: POST /api/users
   Request Body: JSON object with name and email fields.

Example: json

```bash
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

2. Get All Users
   Endpoint: GET /api/users

3. Get a User by ID
   Endpoint: GET /api/users/:id
   Replace :id with the ID of the user you want to retrieve.

4. Update a User by ID
   Endpoint: PUT /api/users/:id
   Replace :id with the ID of the user you want to update.
   Request Body: JSON object with updated name and email fields.

5. Delete a User by ID
   Endpoint: DELETE /api/users/:id
   Replace :id with the ID of the user you want to delete.

You can use tools like Postman to test the API endpoints. See the "Usage" section for more details on how to send requests.

Database
The application uses SQLite as the database. The database file is mydb.db, and a users table is created to store user information.

Error Handling
Proper error handling has been implemented for database operations. If an error occurs, the server will respond with an error message and the appropriate HTTP status code.

Contributing
Feel free to contribute to this project by submitting issues or pull requests. We welcome your feedback and improvements.

License
This project is licensed under the MIT License. See the LICENSE.md file for details.
