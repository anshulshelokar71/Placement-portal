import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import CompanyList from "./components/CompanyList";
import CompanyDetails from "./components/CompanyDetails";
import AddJobProfile from "./components/AddJobProfile";
import CompanyRegistration from "./components/CompanyReg";
import JobProfileDetails from "./components/JobProfileDetails";
import AddEligibilityForm from "./components/AddEligibilityForm";
import AddHiringProcessForm from "./components/AddHiringProcessForm";
import StudentLogin from './components/StudentLogin';
import StudentDashboard from './components/StudentDashboard';
import ProfileForm from "./components/ProfileComplete";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/register-company" element={<CompanyRegistration />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:id" element={<CompanyDetails />} />
        <Route
          path="/companies/:id/add-job-profile"
          element={<AddJobProfile />}
        />
        <Route path="/job/:jobId" element={<JobProfileDetails />} />
        <Route
          path="/job/:jobId/add-eligibility"
          element={<AddEligibilityForm />}
        />
        <Route
          path="/job/:jobId/add-hiring-process"
          element={<AddHiringProcessForm />}
        />
         <Route path="/login" element={<StudentLogin />} />
                <Route path="/complete-profile" element={<ProfileForm />} />
                <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
