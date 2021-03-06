'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostComment.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    type: DataTypes.ENUM('text', 'img'),
    content: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
    modelName: 'PostComment',
  });
  return PostComment;
};