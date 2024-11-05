// models/Resume.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');

const Resume = sequelize.define('Resume', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Resume: {
        type: DataTypes.BLOB,
        allowNull: true
    }
});

module.exports = Resume;
