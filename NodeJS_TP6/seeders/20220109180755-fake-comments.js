'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = (await queryInterface.sequelize.query(`SELECT * from users;`))[0];
    const posts = (await queryInterface.sequelize.query(`SELECT * from posts;`))[0];
    await queryInterface.bulkInsert('Comments', [
      {
        id: uuidv4(),
        content: "Vivamus et tellus facilisis, convallis ante scelerisque, iaculis lectus. Etiam non ipsum sit amet lectus rhoncus mollis nec ac orci. Curabitur aliquet pharetra lacus sed tempor. Etiam magna ligula, finibus et pretium eget, imperdiet eget augue. Praesent eget nibh congue tellus feugiat sagittis nec non eros. Nullam quis pulvinar risus, quis ullamcorper diam. Proin hendrerit erat et dui pulvinar rhoncus. Donec eleifend ut est ut semper. Praesent eget dignissim ligula, sed malesuada lectus.",
        date:  new Date(),
        post_id: posts[0].id,
        author: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        content: "Sed ac velit eleifend, blandit nulla in, auctor turpis. Nullam a laoreet dolor. Aliquam egestas ipsum nec tortor consequat gravida. Quisque pellentesque eu lorem id hendrerit. Donec tincidunt arcu et sem egestas elementum. Fusce non tellus velit. Phasellus varius libero sed massa scelerisque hendrerit. Fusce ut metus eget neque mattis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed luctus pretium augue sed iaculis.",
        date:  new Date(),
        post_id: posts[0].id,
        author: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        content: "Vivamus et tellus facilisis, convallis ante scelerisque, iaculis lectus. Etiam non ipsum sit amet lectus rhoncus mollis nec ac orci. Curabitur aliquet pharetra lacus sed tempor. Etiam magna ligula, finibus et pretium eget, imperdiet eget augue. Praesent eget nibh congue tellus feugiat sagittis nec non eros. Nullam quis pulvinar risus, quis ullamcorper diam. Proin hendrerit erat et dui pulvinar rhoncus. Donec eleifend ut est ut semper. Praesent eget dignissim ligula, sed malesuada lectus.",
        date:  new Date(),
        post_id: posts[2].id,
        author: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        content: "Sed ac velit eleifend, blandit nulla in, auctor turpis. Nullam a laoreet dolor. Aliquam egestas ipsum nec tortor consequat gravida. Quisque pellentesque eu lorem id hendrerit. Donec tincidunt arcu et sem egestas elementum. Fusce non tellus velit. Phasellus varius libero sed massa scelerisque hendrerit. Fusce ut metus eget neque mattis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed luctus pretium augue sed iaculis.",
        date:  new Date(),
        post_id: posts[2].id,
        author: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        content: "Vivamus et tellus facilisis, convallis ante scelerisque, iaculis lectus. Etiam non ipsum sit amet lectus rhoncus mollis nec ac orci. Curabitur aliquet pharetra lacus sed tempor. Etiam magna ligula, finibus et pretium eget, imperdiet eget augue. Praesent eget nibh congue tellus feugiat sagittis nec non eros. Nullam quis pulvinar risus, quis ullamcorper diam. Proin hendrerit erat et dui pulvinar rhoncus. Donec eleifend ut est ut semper. Praesent eget dignissim ligula, sed malesuada lectus.",
        date:  new Date(),
        post_id: posts[1].id,
        author: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        content: "Sed ac velit eleifend, blandit nulla in, auctor turpis. Nullam a laoreet dolor. Aliquam egestas ipsum nec tortor consequat gravida. Quisque pellentesque eu lorem id hendrerit. Donec tincidunt arcu et sem egestas elementum. Fusce non tellus velit. Phasellus varius libero sed massa scelerisque hendrerit. Fusce ut metus eget neque mattis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed luctus pretium augue sed iaculis.",
        date:  new Date(),
        post_id: posts[1].id,
        author: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
