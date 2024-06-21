const AddressCustomer = require('./model/AddressCustomer');
const Customer = require('./model/Customer');
const Article = require('./model/Article');
const Category = require('./model/Category');
const ShoppingCart = require('./model/ShoppingCart');
const Status = require('./model/Status');
const Payment = require('./model/Payment');
const Carrier = require('./model/Carrier');
const Administrator = require('./model/Administrator');

// Associations
Customer.hasMany(AddressCustomer, { foreignKey: 'customer_mail' });
AddressCustomer.belongsTo(Customer, { foreignKey: 'customer_mail' });

Customer.hasMany(ShoppingCart, { foreignKey: 'customer_mail' });
ShoppingCart.belongsTo(Customer, { foreignKey: 'customer_mail' });

Status.hasMany(ShoppingCart, { foreignKey: 'idStatus' });
ShoppingCart.belongsTo(Status, { foreignKey: 'idStatus' });

Payment.hasMany(ShoppingCart, { foreignKey: 'idPayment' });
ShoppingCart.belongsTo(Payment, { foreignKey: 'idPayment' });

Carrier.hasMany(ShoppingCart, { foreignKey: 'idCarrier' });
ShoppingCart.belongsTo(Carrier, { foreignKey: 'idCarrier' });

Category.hasMany(Article, { foreignKey: 'category_ID' });
Article.belongsTo(Category, { foreignKey: 'category_ID' });

ShoppingCart.belongsToMany(Article, { through: 'CartArticle', foreignKey: 'cart_ID' });
Article.belongsToMany(ShoppingCart, { through: 'CartArticle', foreignKey: 'idArticle' });

// Synchronisation de la base de données
sequelize.sync({ force: true }).then(() => {
  console.log("Tables have been created.");
}).catch(error => console.log("Error creating tables: ", error));
