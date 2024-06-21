const sequelize = require('./config/database');
const User = require('./model/User');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync(); // Synchroniser les modèles sans forcer la recréation des tables
    console.log('All models were synchronized successfully.');

    // Ajout d'un utilisateur d'exemple
    const user = await User.create({
      username: 'exampleUser',
      email: 'user@example.com',
      password: 'password123',
    });

    console.log('User created:', user.toJSON());
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
