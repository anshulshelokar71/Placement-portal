// models/EligibilityCriteria.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const JobProfile = require('./JobProfile');
const ProgramBranch = require('./Program_Branch');

const EligibilityCriteria = sequelize.define('EligibilityCriteria', {
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: JobProfile,
            key: 'job_id'
        }
    },
    Min_10th: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Min_12th: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Min_CGPA: {
        type: DataTypes.FLOAT,
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

module.exports = EligibilityCriteria;
