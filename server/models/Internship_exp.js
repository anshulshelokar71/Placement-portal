// models/InternshipExp.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');

const InternshipExp = sequelize.define('InternshipExp', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Company_name: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false
    },
    Period_from: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Period_to: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Paid: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    OnCampus: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});

module.exports = InternshipExp;
