'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // return queryInterface.addColumn('Contacts', 'user_name', Sequelize.STRING)
    return [
      queryInterface.addColumn(
        'Contacts',
        'user_name',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Contacts',
        'role',
        {
          type: Sequelize.STRING
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return [
      queryInterface.removeColumn('Contacts', 'user_name'),
      queryInterface.removeColumn('Contacts', 'role')
    ];
  }
};
