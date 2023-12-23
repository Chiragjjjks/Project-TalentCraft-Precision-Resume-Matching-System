// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HRDashboard from './HRDashboard';
import UserDashboard from './UserDashboard';

const App = () => {
  const redirectToHRDashboard = () => {
    window.location.href = '/hrdashboard'; // Full-page redirect
  };

  const redirectToUserDashboard = () => {
    window.location.href = '/userdashboard'; // Full-page redirect
  };

  return (
    <Router>
      <div>
        <nav className='flex justify-center py-3 space-x-10'>
          <div className='py-2'>By AI ARCHS :)</div>
            <div>
            <button
             className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={redirectToHRDashboard}>Hiring Manager Dashboard</button>

            </div>
            <div>
            <button 
             className="text-white bg-blue-700 hover:bg-white-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={redirectToUserDashboard}>User Dashboard</button>

            </div>

        </nav>
        <Routes>
         
         <Route path='/HRDashboard' element={<HRDashboard/>} />

         <Route path='/UserDashboard' element={<UserDashboard/>} />

       </Routes>
      </div>
    </Router>
  );
};

export default App;
