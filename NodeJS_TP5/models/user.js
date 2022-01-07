'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: 'user_id'
      });
      User.hasMany(models.Comment, {
        foreignKey: 'user_id'
      });
      User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        onDelete: 'CASCADE'
      });
    }
  };
  User.init({
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    githubLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};