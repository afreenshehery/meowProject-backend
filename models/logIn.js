const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// sequelize.sync({ force: true })


// sequelize.sync({ force: true })
const logIn = sequelize.define('logIn', {
       id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
       },
       firstName: {
              type: Sequelize.STRING,
              allowNull: false,

       },

       lastName: {
              type: Sequelize.STRING,
              allowNull: false,

       },


       email: {
              type: Sequelize.INTEGER,
              allowNull: false,

       },
       Otp: {
              type: Sequelize.STRING,
              allowNull: false,

       },


}, {

       freezeTableName: true
});




module.exports = logIn;
