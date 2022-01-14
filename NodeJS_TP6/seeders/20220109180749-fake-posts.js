'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = (await queryInterface.sequelize.query(`SELECT * from users;`))[0];
    await queryInterface.bulkInsert('Posts', [
      {
        id: uuidv4(),
        title: "Article n°1 : Coucou",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed accumsan mi. Aenean bibendum velit vitae auctor pellentesque. Vivamus auctor elit tristique odio egestas, et tincidunt tellus sodales. Curabitur quis nisi ut ex finibus viverra. Nunc risus mi, finibus ut erat et, accumsan porttitor arcu. Curabitur sed maximus tortor. Vestibulum id mi in ipsum elementum pretium eu eu sapien. Sed vel accumsan lectus. Sed faucibus id dui non gravida. Curabitur at orci et ligula porta malesuada. Nam enim sem, pellentesque lacinia ex vitae, tristique posuere metus. Maecenas gravida in ante vitae tristique. Phasellus augue nibh, ultricies id consectetur sit amet, viverra sit amet justo. Aliquam erat volutpat. Proin at nunc nibh. Mauris ultricies nibh eget nisl vulputate, et varius lacus pretium.",
        date: new Date(),
        author: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        title: "Article n°2 : Coucou",
        content: "Fusce quis risus ligula. Fusce accumsan ultricies malesuada. Vivamus interdum, elit feugiat viverra elementum, nulla tortor elementum magna, eu imperdiet arcu massa scelerisque enim. Morbi non aliquam turpis, in efficitur turpis. Pellentesque feugiat finibus sollicitudin. Curabitur malesuada quam et consectetur aliquet. Cras quis tellus malesuada, vulputate libero quis, tincidunt libero. Nullam semper est ornare sem malesuada varius. Vivamus iaculis vehicula quam, non fringilla nibh molestie sed. Etiam at venenatis ante, in placerat enim. Cras rutrum sagittis nunc eu egestas. Aliquam ut tincidunt quam.",
        date: new Date(),
        author: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        title: "Article n°3 : Coucou",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed accumsan mi. Aenean bibendum velit vitae auctor pellentesque. Vivamus auctor elit tristique odio egestas, et tincidunt tellus sodales. Curabitur quis nisi ut ex finibus viverra. Nunc risus mi, finibus ut erat et, accumsan porttitor arcu. Curabitur sed maximus tortor. Vestibulum id mi in ipsum elementum pretium eu eu sapien. Sed vel accumsan lectus. Sed faucibus id dui non gravida. Curabitur at orci et ligula porta malesuada. Nam enim sem, pellentesque lacinia ex vitae, tristique posuere metus. Maecenas gravida in ante vitae tristique. Phasellus augue nibh, ultricies id consectetur sit amet, viverra sit amet justo. Aliquam erat volutpat. Proin at nunc nibh. Mauris ultricies nibh eget nisl vulputate, et varius lacus pretium.",
        date: new Date(),
        author: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        title: "Article n°4 : Coucou",
        content: "Fusce quis risus ligula. Fusce accumsan ultricies malesuada. Vivamus interdum, elit feugiat viverra elementum, nulla tortor elementum magna, eu imperdiet arcu massa scelerisque enim. Morbi non aliquam turpis, in efficitur turpis. Pellentesque feugiat finibus sollicitudin. Curabitur malesuada quam et consectetur aliquet. Cras quis tellus malesuada, vulputate libero quis, tincidunt libero. Nullam semper est ornare sem malesuada varius. Vivamus iaculis vehicula quam, non fringilla nibh molestie sed. Etiam at venenatis ante, in placerat enim. Cras rutrum sagittis nunc eu egestas. Aliquam ut tincidunt quam.",
        date: new Date(),
        author: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
