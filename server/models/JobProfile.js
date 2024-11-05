// models/JobProfile.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Company = require('./Company'); // Adjust the path as necessary

const JobProfile = sequelize.define('JobProfile', {
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    profile_name: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false
    },
    job_details: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Company,
            key: 'company_id'
        }
    },
    Salary: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
});

module.exports = JobProfile;
