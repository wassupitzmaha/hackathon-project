import { BrowserRouter, Routes, Route } from 'react-router-dom'; //React Router components for routing
import 'bootstrap/dist/css/bootstrap.min.css'; //Global Bootstrap CSS
import './App.css'; //custom global css
import AppNavbar from './components/AppNavbar'; //our navigation bar

//individual professional components import
import FrontEndDeveloper from './features/professions/components/FrontEndDeveloper.jsx'; 
import BackEndDeveloper from './features/professions/components/BackEndDeveloper.jsx';
import CybersecurityAnalyst from './features/professions/components/CybersecurityAnalyst.jsx';
import DataScientist from './features/professions/components/DataScientist.jsx';
import DevOpsEngineer from './features/professions/components/DevOpsEngineer.jsx';
import UIUXDesigner from './features/professions/components/UIUXDesigner.jsx';
import MachineLearningEngineer from './features/professions/components/MachineLearningEngineer.jsx'
import MobileAppDeveloper from './features/professions/components/MobileAppDeveloper.jsx'
import FullStackDeveloper from './features/professions/components/Full-StackDeveloper.jsx'
import CloudEngineer from './features/professions/components/CloudEngineer.jsx'

//About me component
import AboutMe from './features/about-me/AboutMe.jsx'
import Home from './features/professions/components/Home.jsx' //Home page component (likely uses ProfessionSearch)



function App() {
  return (
    <BrowserRouter> {/* provide routing context to all child components, wraps my entire application */}

      <AppNavbar /> {/* renders the navigation bar, present on all pages */}
      
      <div className="container mt-4"> {/* bootstrap container for content, centralizes my content and adds a top margin giving a most consistent layout across pages*/}

        <Routes> {/* defines a set of routes, container for  route components*/}


          <Route path="/" element={<Home />} /> {/* route for the homepage */}
          <Route path="/FrontEndDeveloper" element={<FrontEndDeveloper />} /> {/* route for frontend developer page */}
          <Route path="/BackEndDeveloper" element={<BackEndDeveloper />} /> {/* route for backend developer page */}
          <Route path="/CybersecurityAnalyst" element={<CybersecurityAnalyst />} /> {/* route for Cybersecurity Analyst page */}
          <Route path="/DataScientist" element={<DataScientist />} /> {/* route for data scientist page */}
          <Route path="/DevOpsEngineer" element={<DevOpsEngineer />} /> {/* route for devops engineer page */}
          <Route path="/UIUXDesigner" element={<UIUXDesigner />} /> {/* route for UI/UX Designer page */}
          <Route path="/MachineLearningEngineer" element={<MachineLearningEngineer />} /> {/* route for Machine Learning Engineer page */}
          <Route path="/MobileAppDeveloper" element={<MobileAppDeveloper />} /> {/* route for mobile app developer page */}
          <Route path="/FullStackDeveloper" element={<FullStackDeveloper />} /> {/* route for full stack developer page */}
          <Route path="/CloudEngineer" element={<CloudEngineer />} /> {/* route for cloud engineer page */}
          <Route path="/AboutMe" element={<AboutMe />} /> {/* route for about me page */}

          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



