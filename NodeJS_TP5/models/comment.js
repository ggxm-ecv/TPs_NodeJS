'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
      Comment.belongsTo(models.Post, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE'
      });
    }
  };
  Comment.init({
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};