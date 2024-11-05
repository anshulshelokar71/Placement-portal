// models/index.js
const { sequelize } = require('../config/db');
const Student = require('./Student');
const PersonalInfo = require('./Personal_info');
const Skills = require('./Skills');
const Languages = require('./Languages');
const AcademicsInfo = require('./Academics_info');
const InternshipExp = require('./Internship_exp');
const Resume = require('./Resume');
const Application = require('./Application');
const EligibilityCriteria = require('./EligibilityCriteria');
const JobProfile = require('./JobProfile');
const Company = require('./Company');
const HiringStage = require('./HiringStage');
const HiringProcess = require('./HiringProcess');
const ProgramBranch = require('./Program_Branch');

// Associations
Student.hasOne(PersonalInfo, { foreignKey: 'MIS_ID' });
PersonalInfo.belongsTo(Student, { foreignKey: 'MIS_ID' });

Student.hasMany(Skills, { foreignKey: 'MIS_ID' });
Skills.belongsTo(Student, { foreignKey: 'MIS_ID' });

Student.hasMany(Languages, { foreignKey: 'MIS_ID' });
Languages.belongsTo(Student, { foreignKey: 'MIS_ID' });

Student.hasOne(AcademicsInfo, { foreignKey: 'MIS_ID' });
AcademicsInfo.belongsTo(Student, { foreignKey: 'MIS_ID' });

Student.hasMany(InternshipExp, { foreignKey: 'MIS_ID' });
InternshipExp.belongsTo(Student, { foreignKey: 'MIS_ID' });

Student.hasMany(Resume, { foreignKey: 'MIS_ID' });
Resume.belongsTo(Student, { foreignKey: 'MIS_ID' });

Student.hasMany(Application, { foreignKey: 'MIS_ID' });

Application.belongsTo(JobProfile, { foreignKey: 'job_id' });

Application.hasMany(HiringStage, { foreignKey: 'application_id' });

JobProfile.belongsTo(Company, { foreignKey: 'company_id' });
JobProfile.hasMany(HiringProcess, { foreignKey: 'job_id' });
JobProfile.hasMany(Application, { foreignKey: 'job_id' });
JobProfile.hasMany(EligibilityCriteria, { foreignKey: 'job_id' });
EligibilityCriteria.belongsTo(JobProfile, { foreignKey: 'job_id' });


Company.hasMany(JobProfile, { foreignKey: 'company_id' });

ProgramBranch.hasMany(AcademicsInfo, { foreignKey: 'branch_id' });
ProgramBranch.hasMany(EligibilityCriteria, { foreignKey: 'branch_id' });

module.exports = {
    Student,
    PersonalInfo,
    Skills,
    Languages,
    AcademicsInfo,
    InternshipExp,
    Resume,
    Application,
    EligibilityCriteria,
    JobProfile,
    Company,
    HiringStage,
    HiringProcess,
    ProgramBranch
};
