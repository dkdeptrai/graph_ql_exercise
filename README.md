# GraphQL User Service

A lightweight GraphQL service built with Apollo Server for managing user data. This service includes functionality to:

- Retrieve user details by ID.
- Update a user's description.
- Add new users.

## Features

### Queries

- `getUser(id: ID!): User` Retrieve user details (username, description) by ID.

### Mutations

- `updateUserDescription(id: ID!, description: String!): User` Update the description of an existing user.
- `addUser(username: String!, description: String!): User` Add a new user to the system.

## Setup and Installation

### Clone the repository:

#### Copy code

```bash
git clone https://github.com/dkdeptrai/graph_ql_exercise.git
cd graph_ql_exercise
```

#### Install dependencies:

```bash
npm install
```

#### Start the server:

```bash
node server.js
```

#### Access the GraphQL Playground:

- Visit http://localhost:4000 in your browser.

## Usage

### Example Queries and Mutations

#### Query: Retrieve User

```graphql
query {
  getUser(id: "1") {
    username
    description
  }
}
```

#### Mutation: Update User Description

```graphql
mutation ($updateUserDescriptionId: ID!, $description: String!) {
  updateUserDescription(
    id: $updateUserDescriptionId
    description: $description
  ) {
    id
    description
  }
}
```

Variables:

```json
{
  "id": "1",
  "description": "A frontend developer"
}
```
