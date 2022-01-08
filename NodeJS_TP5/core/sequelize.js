const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite:./database.sqlite');

(async ( ) => {
  await sequelize.sync();
})();

module.exports = {
  sequelize,
}
