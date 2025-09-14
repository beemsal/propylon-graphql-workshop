# GraphQL Legislature API

A basic GraphQL server implementation for managing US state legislature data including users, sponsors, bills, amendments, and bill sections.

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Starting the Application

To start the server in production mode:

```bash
npm start
```

To start the server in development mode with auto-restart:

```bash
npm run dev
```

The server will start on port 4000 by default. You can access:

- GraphQL endpoint: `http://localhost:4000/graphql`
- GraphQL Playground: `http://localhost:4000/graphql` (interactive query interface)

## Data Model

The API manages the following entities:

- **Users**: Legislators, staff, and citizens
- **Bills**: Legislative proposals with status tracking
- **Sponsors**: Relationship between users and bills they sponsor
- **Amendments**: Proposed modifications to bills
- **BillSections**: Structural components of bills

## Example Queries

### Get all bills with their sponsors:

```graphql
query {
  bills {
    id
    title
    status
    sponsors {
      user {
        name
      }
      isPrimary
    }
  }
}
```

### Get a specific bill with amendments and sections:

```graphql
query {
  bill(id: "1") {
    title
    description
    amendments {
      title
      status
      proposedBy {
        name
      }
    }
    sections {
      sectionNumber
      title
      content
    }
  }
}
```

### Create a new bill:

```graphql
mutation {
  createBill(
    title: "New Healthcare Bill"
    description: "Comprehensive healthcare reform"
    introducedDate: "2024-03-01"
  ) {
    id
    title
    status
  }
}
```

## Project Structure

- `server.js` - Express server setup with Apollo Server
- `schema.js` - GraphQL type definitions
- `resolvers.js` - GraphQL resolvers for queries and mutations
- `data.js` - Mock data for testing
- `package.json` - Project dependencies and scripts