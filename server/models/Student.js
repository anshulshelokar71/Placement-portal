// models/Student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as necessary

const Student = sequelize.define('Student', {
    MIS_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;
