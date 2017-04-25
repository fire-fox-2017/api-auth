# api-auth

### User Model
| Role | Description |
|------|-------------|
| 0    | Admin       |
| 1    | Normal User |

###List of user routes:
| Route           | HTTP     | Description                  |
|-----------------|----------|------------------------------|
| /api/signup      | POST      | Sign up with new user info            |
| /api/signin      | POST      | Sign in while get an access token based on credentials            |
| /api/users      | GET      | Get all the users info (admin only)            |
| /api/users/:id  | GET      | Get a single user (admin and authenticated user)          |
| /api/users      | POST     | Create a user (admin only)               |
| /api/users/:id  | DELETE   | Delete a user (admin only)               |
| /api/users/:id  | PUT      | Update a user with new info (admin and authenticated user) |

#### Example
```
localhost:3000/api/users   // will return all users in JSON format
```


### Usage
```
npm install
npm start
```

### Heroku
()[]
