# API BASIC
Demo app with basic REST API.

# REST API
List of basic routes:

| Route | HTTP | Description |
| ------ | ------ | ------ |
| /api/signup | GET | Sign up with new user info |
| /api/signin | GET | Sign in while get an access token based on credentials |
| /api/users | GET | Get all the users info (admin only)  |
| /api/users/:id | GET | Get a single users info (admin only and authenticated user)  |
| /api/users | POST | Create a users (admin only) |
| /api/users/:id | PUT | Update a user with new info  (admin only and authenticated user) |
| /api/users/:id | DELETE | Delete a user (admin only) |
