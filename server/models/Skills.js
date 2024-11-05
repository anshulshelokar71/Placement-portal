// models/Skills.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');

const Skills = sequelize.define('Skills', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'MIS_ID'
        }
    },
    Skill: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false
    }
});

module.exports = Skills;
