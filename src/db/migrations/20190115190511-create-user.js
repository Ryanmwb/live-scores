'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "must be a valid email" }
        }
      },
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      favSport: {
        type: Sequelize.STRING
      },
      since: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};