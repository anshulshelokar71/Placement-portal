const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const JobProfile = require('./JobProfile');

const HiringProcess = sequelize.define('HiringProcess', {
    job_id: {
        type: DataTypes.INTEGER,
        references: {
            model: JobProfile,
            key: 'job_id'
        }
    },
    roundNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    roundName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roundDetail: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = HiringProcess;
