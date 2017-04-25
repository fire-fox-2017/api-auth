const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: false }));

app.use('/api', require('./routes/api'));

app.listen(app.get('port'), function(){
  console.log('listening on port '+app.get('port'))
})
