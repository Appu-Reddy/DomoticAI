import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Hero from './Hero';
import Custom404 from './pages/Custom404';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SmartHomeDashboard from './SmartHomeDashboard';
import AnalyticsDashboard from './AnalyticsDashboard';
import Faq from './pages/faqsec';



<<<<<<< HEAD
import { Navigate } from 'react-router-dom';
import Feature_control from './pages/Feature_control';
import Contact_us from './pages/Contact_us';
import About_us_main from './pages/Aboutus/About_us_main';
// import Dashboard from './Dashboard';


=======
>>>>>>> 941a37ae20e05728c5886224a13a3d9fc8a4c219
const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Set isAuthenticated to true after a successful login
    setIsAuthenticated(true);
  };
  const navigate = useNavigate();
 
  return (
    <Routes>
      <Route path="*" element={<Custom404/>} />
      <Route path="/" element={<Hero/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/register" element={<Signup/>} />
<<<<<<< HEAD
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<SmartHomeDashboard/>} />
=======
      {/* <Route path="/dashboardd" element={<Dashboard/>} /> */}
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/dashboard" element={<SmartHomeDashboard/>} />
      {/* <Route
        path="/dashboard"
<<<<<<< HEAD
        element={isAuthenticated ? <SmartHomeDashboard/> : <Navigate to="/login" />}
      /> */}
=======
        element={isAuthenticated ? <SmartHomeDashboard/> : navigate("/login")}
      />
>>>>>>> 6161060533770222c7af91bf1aa5ccda17a67df3
>>>>>>> 941a37ae20e05728c5886224a13a3d9fc8a4c219
      <Route path="/dashboard/analytics" element={<AnalyticsDashboard/>} />
      <Route path='/features' element={<Feature_control />}></Route>
      <Route path='/contactUs' element={<Contact_us />}></Route>
      <Route path='/about' element={<About_us_main />}></Route>
      <Route path='/faq' element={<Faq />} />
    </Routes>
      
  );
}

export default App;
