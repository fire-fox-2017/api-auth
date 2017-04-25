# USER-AUTH

ROUTE | HTTP | Description
------|------| -----------
/api/signup | POST | create a new user with role is "user"
/api/signin | POST | create a token if true (admin, password)
/api/users | GET | Get All User for admin
/api/users/:id | GET | Get a Single User for admin and authenticated user
/api/users | POST | Create a User for admin
/api/users/:id | DELETE | Delete a User for admin
/api/users/:id | PUT | Update a user with new info for admin and authenticated user
