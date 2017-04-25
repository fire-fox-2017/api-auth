# REST API Authentication

Demo app with Authentication REST API

## REST API

List of user routes :

|     Route      |  HTTP  |                        Description                         |
| -------------- | ------ | ---------------------------------------------------------- |
| /api/signup    | POST   | Sign up  with new user info                                |
| /api/signin    | POST   | Sign in while get an access token based on credentials     |
| /api/users     | GET    | Get All the user info (admin only)                         |
| /api/users/:id | GET    | Get a single user (admin and authenticated user)           |
| /api/users     | POST   | Create a user (admin only)                                 |
| /api/users/:id | DELETE | Delete a user (admin only)                                 |
| /api/users/:id | PUT    | Update a user with new info (admin and authenticated user) |


## Usage

With only npm:
> npm install

> npm start

> npm run dev

Access the website via http://localhost:3000 or API via http://localhost:3000/api
