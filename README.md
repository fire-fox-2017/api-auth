# api-auth

##Summary
Kita akan membuat layanan menggunakan REST pada aplikasi kita yang dilengkapi fitur otentikasi dan otorisasi pengguna, sehingga tidak sembarang orang yang dapat mengakses API yang telah kita buat. Aplikasi ini sebaiknya sudah menggunakan database.

```
Pertama yang kita butuh kan adalah :
$ express --veiw=ejs . \\jika ingin menggunakan engine ejs
$ npm install \
$ npm install --save password-hash[secret password] jsonwebtoken[untuk get token API] pg[optional]
```
Buatlah sebuah source data atau database: \
\* Bisa menggunakan file JSON atau SQLITE/POSTGRES DLL.

####Route API
Kamu bisa menggunakan pola perintah seperti dibawah ini :
```
| Route           | HTTP    | Description                                               |
|-----------------|---------|-----------------------------------------------------------|
| /api/signup     | POST    | Sign up with new user info                                |
| /api/signin     | POST    | Sign in while get an access token based on credentials    |
| /api/users      | GET     | Get all the users info (admin only)                       |
| /api/users/:id  | GET     | Get a single user info (admin and authenticated user)     |
| /api/users      | POST    | Create a user (admin only)                                |
| /api/users/:id  | DELETE  | Delete a user (admin only)                                |
| /api/users/:id  | PUT     | Update a user with new info (admin and authenticated user)|
```

####Example Usage

```
localhost:3000/api/users    //will return all users in JSON format in Postman
```