const { PersonalInfo } = require('../models'); // Adjust path as needed

// Create personal info
exports.createPersonalInfo = async (req, res) => {
    try {
        const { MIS_ID, Name, Date_of_Birth, Gender } = req.body;

        const newPersonalInfo = await PersonalInfo.create({
            MIS_ID,
            Name,
            Date_of_Birth,
            Gender,
        });

        res.status(201).json({ success: true, data: newPersonalInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all personal info
exports.getPersonalInfos = async (req, res) => {
    try {
        const personalInfos = await PersonalInfo.findAll();
        res.status(200).json({ success: true, data: personalInfos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get personal info by ID
exports.getPersonalInfoById = async (req, res) => {
    try {
        const personalInfo = await PersonalInfo.findOne({ where: { MIS_ID: req.params.mis_id } });
        if (!personalInfo) {
            return res.status(404).json({ success: false, message: 'Personal info not found' });
        }
        res.status(200).json({ success: true, data: personalInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update personal info
exports.updatePersonalInfo = async (req, res) => {
    try {
        const { MIS_ID } = req.params;
        const { Name, Date_of_Birth, Gender } = req.body;

        const personalInfo = await PersonalInfo.findOne({ where: { MIS_ID } });
        if (!personalInfo) {
            return res.status(404).json({ success: false, message: 'Personal info not found' });
        }

        await personalInfo.update({ Name, Date_of_Birth, Gender });
        res.status(200).json({ success: true, data: personalInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete personal info
exports.deletePersonalInfo = async (req, res) => {
    try {
        const { MIS_ID } = req.params;

        const personalInfo = await PersonalInfo.findOne({ where: { MIS_ID } });
        if (!personalInfo) {
            return res.status(404).json({ success: false, message: 'Personal info not found' });
        }

        await personalInfo.destroy();
        res.status(204).json({ success: true, message: 'Personal info deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const { AcademicsInfo } = require('../models'); // Adjust path as needed

// Create academic info
exports.createAcademicsInfo = async (req, res) => {
    try {
        const { MIS_ID, program, branch_id } = req.body;

        const newAcademicsInfo = await AcademicsInfo.create({
            MIS_ID,
            program,
            branch_id,
        });

        res.status(201).json({ success: true, data: newAcademicsInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all academic info
exports.getAcademicsInfos = async (req, res) => {
    try {
        const academicsInfos = await AcademicsInfo.findAll();
        res.status(200).json({ success: true, data: academicsInfos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get academic info by ID
exports.getAcademicsInfoById = async (req, res) => {
    try {
        const academicsInfo = await AcademicsInfo.findOne({ where: { MIS_ID: req.params.mis_id } });
        if (!academicsInfo) {
            return res.status(404).json({ success: false, message: 'Academic info not found' });
        }
        res.status(200).json({ success: true, data: academicsInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update academic info
exports.updateAcademicsInfo = async (req, res) => {
    try {
        const { MIS_ID } = req.params;
        const { program, branch_id } = req.body;

        const academicsInfo = await AcademicsInfo.findOne({ where: { MIS_ID } });
        if (!academicsInfo) {
            return res.status(404).json({ success: false, message: 'Academic info not found' });
        }

        await academicsInfo.update({ program, branch_id });
        res.status(200).json({ success: true, data: academicsInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete academic info
exports.deleteAcademicsInfo = async (req, res) => {
    try {
        const { MIS_ID } = req.params;

        const academicsInfo = await AcademicsInfo.findOne({ where: { MIS_ID } });
        if (!academicsInfo) {
            return res.status(404).json({ success: false, message: 'Academic info not found' });
        }

        await academicsInfo.destroy();
        res.status(204).json({ success: true, message: 'Academic info deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const { Skills } = require('../models'); // Adjust path as needed

// Create skills
exports.createSkills = async (req, res) => {
    try {
        const { MIS_ID, skill } = req.body;

        const newSkill = await Skills.create({
            MIS_ID,
            skill,
        });

        res.status(201).json({ success: true, data: newSkill });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all skills
exports.getSkills = async (req, res) => {
    try {
        const skills = await Skills.findAll();
        res.status(200).json({ success: true, data: skills });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get skills by ID
exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skills.findOne({ where: { MIS_ID: req.params.mis_id } });
        if (!skill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.status(200).json({ success: true, data: skill });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update skills
exports.updateSkills = async (req, res) => {
    try {
        const { MIS_ID } = req.params;
        const { skill } = req.body;

        const skills = await Skills.findOne({ where: { MIS_ID } });
        if (!skills) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }

        await skills.update({ skill });
        res.status(200).json({ success: true, data: skills });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete skills
exports.deleteSkills = async (req, res) => {
    try {
        const { MIS_ID } = req.params;

        const skills = await Skills.findOne({ where: { MIS_ID } });
        if (!skills) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }

        await skills.destroy();
        res.status(204).json({ success: true, message: 'Skill deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const { Languages } = require('../models'); // Adjust path as needed

// Create languages
exports.createLanguages = async (req, res) => {
    try {
        const { MIS_ID, language } = req.body;

        const newLanguage = await Languages.create({
            MIS_ID,
            language,
        });

        res.status(201).json({ success: true, data: newLanguage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all languages
exports.getLanguages = async (req, res) => {
    try {
        const languages = await Languages.findAll();
        res.status(200).json({ success: true, data: languages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get language by ID
exports.getLanguageById = async (req, res) => {
    try {
        const language = await Languages.findOne({ where: { MIS_ID: req.params.mis_id } });
        if (!language) {
            return res.status(404).json({ success: false, message: 'Language not found' });
        }
        res.status(200).json({ success: true, data: language });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update languages
exports.updateLanguages = async (req, res) => {
    try {
        const { MIS_ID } = req.params;
        const { language } = req.body;

        const languages = await Languages.findOne({ where: { MIS_ID } });
        if (!languages) {
            return res.status(404).json({ success: false, message: 'Language not found' });
        }

        await languages.update({ language });
        res.status(200).json({ success: true, data: languages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete languages
exports.deleteLanguages = async (req, res) => {
    try {
        const { MIS_ID } = req.params;

        const languages = await Languages.findOne({ where: { MIS_ID } });
        if (!languages) {
            return res.status(404).json({ success: false, message: 'Language not found' });
        }

        await languages.destroy();
        res.status(204).json({ success: true, message: 'Language deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
