const express = require('express');
const userRoot = require('./rooter/user'); 
const sequelize = require('./config/database');
const UserNextRoute = require('./rooter/usernext'); 
const address_customerRoot = require('./rooter/address_customer');
const CustomerRoot = require('./rooter/customer')
const ArticleRoot = require('./rooter/article')
const AdministratorRoot = require('./rooter/administrator')
const CarrierRoot = require('./rooter/carrier')
const Shopping_cartRoot = require('./rooter/shopping_cart')
const CategoryRoot = require('./rooter/category')
const PaymentRoot = require('./rooter/payment')
const StatusRoot = require('./rooter/status')

const app = express();

//===============================[ROOT]===============================\\

app.use('/user', userRoot );
app.use('/usernext', UserNextRoute );
app.use('/address_customer', address_customerRoot );
app.use('/customer', CustomerRoot );
app.use('/article', ArticleRoot );
app.use('/administrator', AdministratorRoot );
app.use('/carrier', CarrierRoot );
app.use('/shopping_cart', Shopping_cartRoot );
app.use('/category', CategoryRoot );
app.use('/payment', PaymentRoot );
app.use('/status', StatusRoot );


//===============================[DB & PORT]===============================\\

const PORT = 3060;
sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
  app.listen(PORT)
}).catch(error => {
  console.error('Unable to synchronize the database:', error);
});
//===============================[Git]===============================\\
