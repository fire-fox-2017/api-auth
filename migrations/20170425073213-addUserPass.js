'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      return [
          queryInterface.addColumn(
              'Students',
              'name', {
                  type: Sequelize.STRING
              }
          )
      ];
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn('Users','username', {type : Sequelize.STRING}),
      queryInterface.addColumn('Users','password', {type : Sequelize.STRING})
    ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
