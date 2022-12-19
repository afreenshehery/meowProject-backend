const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// sequelize.sync({ force: true })


// sequelize.sync({ force: true })
const Webcam = sequelize.define('webcam', {
      id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
      },
      name: {
            type: Sequelize.STRING,
            allowNull: false,

      },

      // email: {
      //       type: Sequelize.STRING,
      //       allowNull: false,
      // },
      image: {
            type: Sequelize.TEXT,
            allowNull: false,

      },


}, {

      freezeTableName: true
});




module.exports = Webcam;
