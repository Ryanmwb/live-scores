'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    team1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team2: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Chat.associate = function(models) {
    // associations can be defined here
    Chat.hasMany(models.Message, {
      foreignKey: "chatId",
      as: "messages"
    })
  };
  return Chat;
};