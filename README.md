# api-auth
A simple demonstration of REST API AUTH using Express.JS

### Installation
```javascript
npm install
npm start
```

### REST API
Access the API from http://localhost:3000/api/users

List of users routes:

Route | HTTP | Description
----- | ---- | -----------
/api/signup| POST | Sign up with new user info
/api/sigin| POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users info (admin only)
/api/users/:id | GET | Get a single user info (admin and authenticated user)
/api/users | POST | create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin and authenticated user)

