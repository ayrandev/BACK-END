const connection =require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductImageModel = connection.define("ProdictImageModel", {
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "product"
            },
            key: 'id'
        }
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    
}, {
    tableName: "product_image"
});


module.exports = ProductImageModel;