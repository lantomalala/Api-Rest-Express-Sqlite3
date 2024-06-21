const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Carrier = sequelize.define('Carrier', {
  idCarrier: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  carrier_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Carrier;
