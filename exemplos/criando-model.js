const connection = require('../src/database/connection.js');
const { DataTypes } = require("sequelize");

const UserAccessModel = connection.define("UserAccessModel", {
    email: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    }
},  
{
    tableName: "user_access",
});

UserAccessModel.sync();

module.exports = UserAccessModel;