'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = (await queryInterface.sequelize.query(`SELECT * from roles;`))[0];
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        lastname: "Collignon",
        firstname: "Baptiste",
        email: "baptiste.collignon@mail-ecv.fr",
        role_id: roles[0].id,
        username: "babagreno",
        githubUrl: "https://github.com/BCollignonEcv",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        lastname: "test",
        firstname: "test",
        email: "test@test.fr",
        role_id: roles[2].id,
        username: "test",
        githubUrl: "https://github.com/test",
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
