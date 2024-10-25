const connection =require('../database/connection');
const { DataTypes } = require('sequelize')

const ProductOptionsModel = connection.define("ProductOptionsModel", {
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "product"
            },
            key: 'id'
        }
    },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        shape: {
            type: DataTypes.ENUM("square", "circle"),
            allowNull: false,
            defaultValue: "square"
        },
        raidius: {
            allowNull: false,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM("text", "color"),
            defaultValue: "text",
            allowNull: false
        },
        values: {
            type: DataTypes.STRING(255),
            allowNull: false
        }

},{})

module.exports = ProductOptionsModel;