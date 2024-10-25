const { Sequelize } = require('sequelize');

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "1234",
    database: "store"
});

/*let product = connection.query("SELECT * FROM product");

console.log(product);*/

module.exports = connection;