// models/Company.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Company = sequelize.define('Company', {
    company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comp_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_person: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registration_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Company;
