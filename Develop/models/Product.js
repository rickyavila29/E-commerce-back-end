// import important parts of sequelize library
const { Model, DataTypes, STRING } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
    // define columns
    id: {
      type: INTEGER
    },
    product_name: {
      type: STRING
    },
    price: {
      type: DECIMAL(0, 10)
    },
    stock: {
      type: INTEGER
      },
    category_id: {
      type: STRING
      },
});

module.exports = Product;
