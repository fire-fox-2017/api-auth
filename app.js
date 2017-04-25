const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// NOTE: set
app.set('port', process.env.PORT || 3000)
app.use(bodyParser.urlencoded({extended: true}));

// route
const users = require('./routes/users');

// use the route
app.use('/api/users', users);

app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;