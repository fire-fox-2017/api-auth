'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dateofbirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    access : DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
