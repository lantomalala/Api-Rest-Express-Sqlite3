const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define("Customer", {
  idCustomer: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customer_mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  customer_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  customer_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Customer;
