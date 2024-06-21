const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ShoppingCart = sequelize.define('ShoppingCart', {
  idCart: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cart_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  cart_price_ht: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tva: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cart_price_ttc: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cart_closed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  cart_canceled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  quantity_article: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ShoppingCart;
