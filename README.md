# api-auth

API AUTH merupakan aplikasi layanan menggunakan REST yang dilengkapi
fitur otentikasi dan otorisasi pengguna, sehingga tidak sembarang pengguna
yang dapat mengakses API yang telah dibuat.

# List Route
Route | HTTP | Description
--- | --- | ---
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users info **(admin only)**
/api/users/;id | GET | Get a single user info **(admin and authenticated user)**
/api/users | POST | Create a user **(admin only)**
/api/users/:id | DELETE | Delete a user **(admin only)**
/api/users/:id | PUT | Update a user with new info **(admin and authenticated user)**

# Usage
1. Install package.json dependency

    npm install

2. Pastikan config database sesuai

    "dialect":"postgres",

    "port":"5432"

3. Migrate database menggunakan sequelize

    sequelize db:migrate

4. Run app

    nodemon app.js
