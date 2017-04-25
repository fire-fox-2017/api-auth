'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contact;
};
