const express = require('express');
const app = express();
//const bodyParser = require('body-parser');




app.get('/', (req, res) => {
    const sequelize = require('./config/database');
const User = require('./model/User');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Récupère tous les utilisateurs
    const users = await User.findAll();

    // Affiche les utilisateurs
    console.log('All users:');
    users.forEach(user => {
      console.log(user.toJSON());
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})(); 
});
app.listen(3060);

