// models/PersonalInfo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student'); // Adjust the path as necessary

const PersonalInfo = sequelize.define('PersonalInfo', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Name: {
        type: DataTypes.CHAR(1),
        allowNull:false
    },
    Address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Personal_email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    College_email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Gender: {
        type: DataTypes.CHAR(1),
        allowNull: true
    }
});

module.exports = PersonalInfo;
