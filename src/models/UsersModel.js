const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const UserModel = connection.define("UserModel", {
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    firstname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    tableName: "users"
});



module.exports = UserModel;