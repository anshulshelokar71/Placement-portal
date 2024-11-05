const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProgramBranch = sequelize.define('ProgramBranch', {
    branch_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    program: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branch: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ProgramBranch;
