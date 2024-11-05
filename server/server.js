const express = require('express');
const dotenv = require('dotenv');
const sequelize  = require('./config/db'); // Import sequelize instance
require('./models');  // Ensure this is importing all your models
const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/student');
const { ProgramBranch,Student } = require('./models');
dotenv.config();
const app = express();
const bcrypt = require('bcrypt');

// Middleware
app.use(express.json());



// Sync Database Function
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); // Set to 'false' in production or to keep existing data
       
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);  // Exit if there's a failure in DB connection
    }
};

app.use("/admin", adminRouter);
app.use("/student", studentRouter);

async function createSampleStudents() {
    // const sampleStudents = [
    //     { MIS_ID: '612203163', password: 'password1' },
    //     { MIS_ID: '612203164', password: 'password2' },
    //     { MIS_ID: '612203165', password: 'password3' },
    //     { MIS_ID: '612203166', password: 'password4' },
    //     { MIS_ID: '612203167', password: 'password5' },
    // ];
    const sampleBranches = [
        { branch_id: 1, program: 'B.Tech', branch: 'Computer' },
        { branch_id: 2, program: 'B.Tech', branch: 'Mechanical' },
        { branch_id: 3, program: 'B.Tech', branch: 'Civil' },
        { branch_id: 4, program: 'B.Tech', branch: 'EnTC' },
        { branch_id: 5, program: 'B.Tech', branch: 'Electrical' },
        { branch_id: 6, program: 'B.Tech', branch: 'Manufacturing' },
        { branch_id: 7, program: 'B.Tech', branch: 'Metallurgy' },
        { branch_id: 8, program: 'B.Tech', branch: 'Instrumentation' }

    ];
    // for (const student of sampleBranches) {
        // const hashedPassword = await bcrypt.hash(student.password, 10);
        await ProgramBranch.bulkCreate(sampleBranches);
    // }
}


// Start the server only after syncing the database
syncDatabase().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        // createSampleStudents();
    });
});
