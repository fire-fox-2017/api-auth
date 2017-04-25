'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Contacts', [{
        name: 'John Doe',
        password: '1234',
        phone: '0218884592',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe2',
        password: '1234',
        phone: '0218884592',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
