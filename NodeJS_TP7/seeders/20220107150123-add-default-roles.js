'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Roles', [{
        id: uuidv4(),
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        name: 'Publisher',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        name: 'Reader',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
