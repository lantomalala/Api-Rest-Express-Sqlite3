const { Sequelize } = require('sequelize');
const path = require('path');

// Détermine le chemin complet vers le fichier database.sqlite
const storagePath = path.join(__dirname, '../path/to/database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: false,
});

module.exports = sequelize;
