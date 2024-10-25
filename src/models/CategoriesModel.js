const connection = require('../database/connection');
const { DataTypes } = require("sequelize");

const CategoriesModel = connection.define("CategoriesModel", {
    name: {
        type: DataTypes.STRING(45),
        allowNull:false
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: "categories"
});


module.exports = CategoriesModel;