# api-auth

Author : Haryana wisnu

Create Date : Selasa, 25 April 2017

Description : API Auth dengan CRUD dan Authentication password dengan token

Acces via localhost:3000

Install Step :
- create folder api-auth
- npm init
- express .
- npm install
- npm install --save sequelize sequelize-cli pg jsonwebtoken password-hash
- sequelize init
- sequelize model:create --name Users --attribute username:string,password:string,role:string,email:string
- sequelize db:migrate
- sequelize seed:create --name seed-users-dummy
- sequelize db:seed --seed seed-users-dummy


| Route | HTTP |Description|
| ------ | ------ |------ |
|/api/signup       |   POST   |      sign up with new user info|
|/api/signin       |   POST   |      sign in while get an access token based on credentials|
|/api/users       |   GET   |      get all the users(admin)|
|/api/users/:id   |   GET      |   get a single users(admin and Authenticaticated user)|
|/api/users       |   POST     |   create a user (admin only)|
|/api/users/:id   |   DELETE    |  delete a user (admin only)|
|/api/users/:id   |   PUT        | update a user with new info (admin and Authenticated user)|
