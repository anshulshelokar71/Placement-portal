// models/AcademicsInfo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');
const ProgramBranch = require('./Program_Branch');
const AcademicsInfo = sequelize.define('AcademicsInfo', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Tenth_per: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Twelfth_per: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Curr_sem: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    CGPA: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Project_scheme: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Edu_gap: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    IsBacklog: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProgramBranch, // Assuming a separate model for program_branch
            key: 'branch_id'
        }
    }
});

module.exports = AcademicsInfo;
