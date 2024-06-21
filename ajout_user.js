const sequelize = require('./config/database');
const User = require('./model/User');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Ajout d'un nouvel utilisateur
    const newUser = await User.create({
      username: 'Rakotmalanga julio',
      email: 'Rakotmalanga julio@user.com',
      password: 'Tesy152',
    });

    console.log('New user created:', newUser.toJSON());
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
