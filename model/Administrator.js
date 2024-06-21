const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Administrator = sequelize.define("Administrator", {
  idAdministrator: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  administrator_login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  administrator_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Administrator;
