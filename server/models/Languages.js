// models/Languages.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');

const Languages = sequelize.define('Languages', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Language: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false
    }
});

module.exports = Languages;
