'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
      Post.hasMany(models.Comment, {
        foreignKey: 'post_id'
      });
    }
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};