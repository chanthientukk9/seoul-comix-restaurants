# Setup and How to use

This is a guide to use seoul-comix-restaurants project. It is a Nextjs project which using Prisma as ORM and tRPC for communication between backend and frontend.

## Setup

### 0 - Prerequisites

- You need to have nodejs 18.20.1 or newer.
- You need to have an IDE or code editor like VSCode.
- You need to have a postgresql database to help this project connect to.

### 1 - Setup .env file before install dependencies

- You need to create .env file in root directory then fill this file to ensure project can connect to database:

```
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
```

### 2 - Install dependencies

First you need to pull this project into your local machine, then access to root directory of project and run:

```
yarn
```

It will automatically install all dependencies and setup connection with database.

### 3 - Migrate database

After install dependencies, you can run this command to migrate database:

```
yarn migrate-dev
```

To have seed data to test you can run:

```
yarn db-seed
```

To clear db you can run:

```
yarn db-seed
```

### 4 - Start the project

After install packages and migrate data, you can now start the project:

```
yarn dev
```

then access `localhost:3000` to see the page.

### 5 - Project structure

```
project
│   README.md // How to install and use this project
│   tsconfig.json // For configuration of typescript
|   next.config.mjs // For nextjs configuration
│   package.json // For working packages
|   .env    // Remember to create it in your local machine.
|
└───src
│   └───app // For defined routing for pages and api
│   |   │   api // Directory for api routing
│   |   │   fonts // For static fonts
│   |   │   ...other route
|   |   |_____________
│   │
│   └───components // For smaller ui parts, re-use components
│   |   │   CategoriesFilter
│   |   │   Restaurant
│   |   │   ...
|   |   |_____________
|   |
│   └───prisma // Prisma code
│   |   │   prisma.ts // Create an singleton prisma instance for use in project
│   |   │   env.js // Check required env when start and run project
│   |   │   ...
|   |   |_____________
|   |
│   └───trpc // tRPC configuration and init instance, helpers
│   |   │   routers // Create tRPC routers for requests
│   |   │   init.ts // Init tRPC instance
│   |   │   ...
|   |   |_____________
|   |
│   └───utils // Utilities and helpers for UI
│   |   │   trpc.ts // helper for FE
│   |   │
│   |   │   ...
|   |   |_____________
│
└───prisma
    │   schema.prisma // Define connection configuration for db and define
    |                 // database models
    │   seed.ts       // For add seed data to empty database
```

### 5 - Notes

- Restaurants list is render in server side
- Categories list is render in server side
- Like button is render client side.
- You can click on heart icon to like (Full red heart) or unlike (Outline of white heart), when you click on heart, please wait some seconds then it will show the result.
- There are indicators on each Restaurant card image, each indicator is a controller for an image of that restaurant. Click on it to change image.
- It is an responsive website
