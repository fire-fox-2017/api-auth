# API-AUTH

API-Auth is a simple example of authentication and authorization using the API. The implemented concepts in the app:
  - user login with hashed password
  - json web token for authorization

# Routes

| Route | HTTP method | Description|
| ---------- | ------------------- | ---------- |
| /api/signup | POST | Sign up with new user info |
| /api/signin | POST | Sign in, access token is returned based on credential |
| /api/users | GET | Get all the users info (Admin only) |
| /api/users/:id | GET | Get a single user infor (Admin and authorized user) |
| /api/users/ | POST | Create a user (Admin only) |
| /api/users/:id | DELETE | Delete a user (Admin only) |
| /api/users/:id | PUT | Update a user with new info (Admin and authorized user) |


Signing up and creating user require {username:<username>, password:<password>, role:<'admin' or 'user'>}

# How to Use:
Install the depedencies first and then start the app as follows:
```sh
$ npm install
$ npm start
```
Access the website via HTTP://localhost:3000, running the app in Postman is recommended
