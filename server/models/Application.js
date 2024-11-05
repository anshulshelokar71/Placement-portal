// models/Application.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');
const JobProfile = require('./JobProfile'); // Adjust the path as necessary

const Application = sequelize.define('Application', {
    Application_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: JobProfile,
            key: 'job_id'
        }
    },
    MIS_ID: {
        type: DataTypes.STRING(9),
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Status: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Application_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = Application;
