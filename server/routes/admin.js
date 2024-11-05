const express = require("express");
const router = express.Router();

const HiringProcess = require('../models/HiringProcess');
const HiringStage = require('../models/HiringStage');
const EligibilityCriteria = require('../models/EligibilityCriteria');
const JobProfile = require('../models/JobProfile');
const Company = require('../models/Company'); 

// POST request to add a hiring stage for a hiring process

router.post('/hiringstage', async (req, res) => {
    try {
        const stage = await HiringStage.create(req.body);
        res.status(201).json(stage);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// POST request to add a hiring process step for a job profile
router.post('/hiringprocess', async (req, res) => {
    try {
        const process = await HiringProcess.create(req.body);
        res.status(201).json(process);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// POST request to add eligibility criteria for a job profile
router.post('/eligibility', async (req, res) => {
    try {
        // Insert eligibility criteria
        const eligibility = await EligibilityCriteria.create(req.body);
        res.status(201).json(eligibility);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// POST request to add a job profile linked to a company
router.post('/jobprofile', async (req, res) => {
    try {
        // Create a job profile with company id (comp_id should be in the request)
        const jobProfile = await JobProfile.create(req.body);
        res.status(201).json(jobProfile);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/jobprofile/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // Create a job profile with company id (comp_id should be in the request)
        const jobProfile = await JobProfile.findAll({where:{
            company_id:id
        }});
        res.status(201).json(jobProfile);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/job-profile/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // Create a job profile with company id (comp_id should be in the request)
        const jobProfile = await JobProfile.findOne({where:{
            job_id:id
        }});
        res.status(201).json(jobProfile);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// POST request to add a company to the companies table
router.post('/company', async (req, res) => {
    try {
        // Insert the data into the Company table
        const company = await Company.create(req.body);
        res.status(201).json(company);  // Send back the newly created company
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/company', async (req, res) => {
    try {
        // Insert the data into the Company table
        const company = await Company.findAll();
        res.status(201).json(company);  // Send back the newly created company
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/companyById/:id', async (req, res) => {
    try {
        // Insert the data into the Company table
        const id =parseInt(req.params.id);
        console.log(id);
        
        const company = await Company.findOne({where: {
            company_id: id
          }});
        res.status(201).json(company);  // Send back the newly created company
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Routes for Eligibility Criteria
router.post('/job/:jobId/add-eligibility', async (req, res) => {
    const { jobId } = req.params;
    const { Min_10th, Min_12th, Min_CGPA, branch_id } = req.body;
    try {
        const eligibility = await EligibilityCriteria.create({
            job_id: jobId,
            Min_10th,
            Min_12th,
            Min_CGPA,
            branch_id
        });
        res.status(201).json(eligibility);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Routes for Hiring Process
router.post('/job/:jobId/add-hiring-process', async (req, res) => {
    const { jobId } = req.params;
    const { roundNo, roundName, roundDetail } = req.body;
    try {
        const hiringProcess = await HiringProcess.create({
            job_id: jobId,
            roundNo,
            roundName,
            roundDetail
        });
        res.status(201).json(hiringProcess);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports=router;
