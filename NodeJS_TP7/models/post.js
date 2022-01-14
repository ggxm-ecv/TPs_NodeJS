'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'author',
        allowNull: false,
      }); 
      this.hasMany(models.Comment, {
        foreignKey: 'post_id',
        allowNull: false,
      });    
    }
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.DATE,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};