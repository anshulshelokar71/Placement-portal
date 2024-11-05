import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is being used
const branchesData = [
    { branch_id: 1, program: 'B.Tech', branch: 'Computer' },
    { branch_id: 2, program: 'B.Tech', branch: 'Mechanical' },
    { branch_id: 3, program: 'B.Tech', branch: 'Civil' },
    { branch_id: 4, program: 'B.Tech', branch: 'EnTC' },
    { branch_id: 5, program: 'B.Tech', branch: 'Electrical' },
    { branch_id: 6, program: 'B.Tech', branch: 'Manufacturing' },
    { branch_id: 7, program: 'B.Tech', branch: 'Metallurgy' },
    { branch_id: 8, program: 'B.Tech', branch: 'Instrumentation' }
];

// Define the program options
const programs = ['B.Tech'];
const ProfileForm = () => {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    personalInfo: {},
    academicsInfo: {},
    internshipExp: [],
    languages: [],
    skills: [],
    resume: null,
  });

  const navigate = useNavigate(); // To redirect to the student dashboard

  // Go to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form submission (for now, a simple alert, but should be a POST request)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data: ", formData);
    // Submit the form data to the backend here
    navigate('/student-dashboard');
  };

  // Render the appropriate form section based on the step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <AcademicsInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <InternshipExp formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Languages formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Skills formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <Resume formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        {renderStep()}
      </div>
    </div>
  );
};

// PersonalInfo Component
const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const [data, setData] = useState(formData.personalInfo || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setFormData((prev) => ({ ...prev, personalInfo: data }));
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="Name"
            value={data.Name || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="Address"
            value={data.Address || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Add other PersonalInfo fields similarly */}
        <div className="mb-4">
          <label className="block text-gray-700">Personal Email</label>
          <input
            type="email"
            name="Personal_email"
            value={data.Personal_email || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">College Email</label>
          <input
            type="email"
            name="College_email"
            value={data.College_email || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
    <label className="block text-gray-700">Gender</label>
    <select
        name="gender"
        value={formData.gender || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
        <option value="">Select Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Other</option>
    </select>
</div>


        <button
          type="button"
          onClick={handleNext}
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

// Similarly, create components for AcademicsInfo, InternshipExp, Languages, Skills, and Resume.
const AcademicsInfo = ({ formData, setFormData, nextStep, prevStep }) => {
    const [data, setData] = useState(formData.academicsInfo || {});
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');

    // Handle program selection
    const handleProgramChange = (e) => {
        setSelectedProgram(e.target.value);
        setSelectedBranch(''); // Reset branch selection when program changes
    };

    // Handle branch selection
    const handleBranchChange = (e) => {
        setSelectedBranch(e.target.value);
    };

    // Get corresponding branches based on selected program
    const getBranchesForProgram = (program) => {
        return branchesData.filter(branch => branch.program === program);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleNext = () => {
      setFormData((prev) => ({ ...prev, academicsInfo: data }));
      nextStep();
    };
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Academic Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">10th Percentage</label>
            <input
              type="number"
              name="Tenth_per"
              value={data.Tenth_per || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">12th Percentage</label>
            <input
              type="number"
              name="Twelfth_per"
              value={data.Twelfth_per || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Current Semester</label>
            <input
              type="number"
              name="Curr_sem"
              value={data.Curr_sem || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CGPA</label>
            <input
              type="number"
              name="CGPA"
              value={data.CGPA || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
    <label className="block text-gray-700">Project Scheme</label>
    <select
        name="Project_scheme"
        value={formData.Project_scheme || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
        <option value="">Select Scheme</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="no">none</option>
    </select>
</div>
<div className="mb-4">
    <label className="block text-gray-700">Backlog</label>
    <select
        name="IsBacklog"
        value={formData.IsBacklog || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
        <option value="">Backlog?</option>
        <option value="true">yes</option>
        <option value="false">No</option>
    </select>
</div>
<div className="mb-4">
                <label className="block text-gray-700">Program</label>
                <select 
                    value={selectedProgram} 
                    onChange={handleProgramChange} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Program</option>
                    {programs.map((program) => (
                        <option key={program} value={program}>
                            {program}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Branch</label>
                <select 
                    value={selectedBranch} 
                    onChange={handleBranchChange} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={!selectedProgram} // Disable if no program is selected
                >
                    <option value="">Select Branch</option>
                    {getBranchesForProgram(selectedProgram).map((branch) => (
                        <option key={branch.branch_id} value={branch.branch_id}>
                            {branch.branch}
                        </option>
                    ))}
                </select>
            </div>

          {/* Add other fields for Academics */}
          <button
            type="button"
            onClick={prevStep}
            className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </form>
      </div>
    );
  };


  const InternshipExp = ({ formData, setFormData, nextStep, prevStep }) => {
      const [data, setData] = useState(formData.internshipExp || []);
  
      const handleChange = (index, e) => {
          const { name, value, type, checked } = e.target;
          const updatedData = [...data];
          // Handle boolean values for Paid and OnCampus
          if (type === 'checkbox') {
              updatedData[index][name] = checked;
          } else {
              updatedData[index][name] = value;
          }
          setData(updatedData);
      };
  
      const addInternship = () => {
          setData([...data, { Company_name: '', Period_from: '', Period_to: '', Paid: false, OnCampus: false }]);
      };
  
      const handleNext = () => {
          setFormData((prev) => ({ ...prev, internshipExp: data }));
          nextStep();
      };
  
      return (
          <div>
              <h2 className="text-2xl font-semibold mb-4">Internship Experience</h2>
              {data.map((exp, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md shadow-sm">
                      <label className="block text-gray-700">Company Name</label>
                      <input
                          type="text"
                          name="Company_name"
                          value={exp.Company_name || ''}
                          onChange={(e) => handleChange(index, e)}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                      />
  
                      <label className="block text-gray-700">Period From</label>
                      <input
                          type="date"
                          name="Period_from"
                          value={exp.Period_from || ''}
                          onChange={(e) => handleChange(index, e)}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                      />
  
                      <label className="block text-gray-700">Period To</label>
                      <input
                          type="date"
                          name="Period_to"
                          value={exp.Period_to || ''}
                          onChange={(e) => handleChange(index, e)}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                      />
  
                      <div className="flex items-center mb-2">
                          <input
                              type="checkbox"
                              name="Paid"
                              checked={exp.Paid}
                              onChange={(e) => handleChange(index, e)}
                              className="mr-2"
                          />
                          <label className="text-gray-700">Paid</label>
                      </div>
  
                      <div className="flex items-center mb-2">
                          <input
                              type="checkbox"
                              name="OnCampus"
                              checked={exp.OnCampus}
                              onChange={(e) => handleChange(index, e)}
                              className="mr-2"
                          />
                          <label className="text-gray-700">On Campus</label>
                      </div>
                  </div>
              ))}
              <button
                  type="button"
                  onClick={addInternship}
                  className="mb-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                  Add Internship
              </button>
              <button
                  type="button"
                  onClick={prevStep}
                  className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                  Previous
              </button>
              <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                  Next
              </button>
          </div>
      );
  };
  

  
  const Languages = ({ formData, setFormData, nextStep, prevStep }) => {
    const [data, setData] = useState(formData.languages || []);
  
    const handleChange = (index, e) => {
      const { value } = e.target;
      const updatedData = [...data];
      updatedData[index] = value;
      setData(updatedData);
    };
  
    const addLanguage = () => {
      setData([...data, '']);
    };
  
    const handleNext = () => {
      setFormData((prev) => ({ ...prev, languages: data }));
      nextStep();
    };
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        {data.map((language, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Language</label>
            <input
              type="text"
              value={language || ''}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addLanguage}
          className="mb-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Language
        </button>
        <button
          type="button"
          onClick={prevStep}
          className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    );
  };
  const Skills = ({ formData, setFormData, nextStep, prevStep }) => {
    const [data, setData] = useState(formData.skills || []);
  
    const handleChange = (index, e) => {
      const { value } = e.target;
      const updatedData = [...data];
      updatedData[index] = value;
      setData(updatedData);
    };
  
    const addSkill = () => {
      setData([...data, '']);
    };
  
    const handleNext = () => {
      setFormData((prev) => ({ ...prev, skills: data }));
      nextStep();
    };
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        {data.map((skill, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Skill</label>
            <input
              type="text"
              value={skill || ''}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSkill}
          className="mb-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Skill
        </button>
        <button
          type="button"
          onClick={prevStep}
          className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    );
  };
  const Resume = ({ formData, setFormData, prevStep, submitForm }) => {
    const [resumeFile, setResumeFile] = useState(formData.resume || null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setResumeFile(file);
    };
  
    const handleSubmit = () => {
      setFormData((prev) => ({ ...prev, resume: resumeFile }));
      submitForm();
    };
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upload Resume</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Resume</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={prevStep}
            className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
          

export default ProfileForm;
