const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Application = require('./Application');

const HiringStage = sequelize.define('HiringStage', {
    stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roundNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    roundStatus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remarks: {
        type: DataTypes.STRING,
        allowNull: true
    },
    application_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Application,
            key: 'application_id'
        }
    }
});

module.exports = HiringStage;
