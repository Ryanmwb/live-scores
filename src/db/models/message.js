'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
     allowNull: false}
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })
    Message.belongsTo(models.Chat, {
      foreignKey: "chatId",
      onDelete: "CASCADE"
    })
  };
  return Message;
};