var db = require('../models');
var util = {};
var models = require('../models/index');


util.isValid = function(input) {
  return new Promise((res, rej) => {
    db.User.findOne({
        where: {
          username: input
        }
      })
      .then((user) => {
        console.log(user);
        if (user === null) {
          rej(false)
        } else {
          res(user.id)
        }
      })
      .catch(() => {
        console.log('ada error di db')
      })
  })
}




module.exports = util;
