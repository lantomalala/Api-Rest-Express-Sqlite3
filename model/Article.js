const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Article = sequelize.define("Article", {
  idArticle: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  article_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  article_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  article_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  article_actif: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Article;
