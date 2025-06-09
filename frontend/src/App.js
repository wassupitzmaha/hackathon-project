import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import FrontEndDeveloper from './features/professions/components/FrontEndDeveloper.jsx';
import BackEndDeveloper from './features/professions/components/BackEndDeveloper.jsx';
import CybersecurityAnalyst from './features/professions/components/CybersecurityAnalyst.jsx';
import DataScientist from './features/professions/components/DataScientist.jsx';
import DevOpsEngineer from './features/professions/components/DevOpsEngineer.jsx';
import UIUXDesigner from './features/professions/components/UI-UXDesigner.jsx';
import MachineLearningEngineer from './features/professions/components/MachineLearningEngineer.jsx'
import MobileAppDeveloper from './features/professions/components/MobileAppDeveloper.jsx'
import FullStackDeveloper from './features/professions/components/Full-StackDeveloper.jsx'
import CloudEngineer from './features/professions/components/CloudEngineer.jsx'
import Home from './features/professions/components/Home.jsx'





function App() {
  return (
    <BrowserRouter>

      <AppNavbar />
      
      <div className="container mt-4">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FrontEndDeveloper" element={<FrontEndDeveloper />} />
          <Route path="/BackEndDeveloper" element={<BackEndDeveloper />} />
          <Route path="/CybersecurityAnalyst" element={<CybersecurityAnalyst />} />
          <Route path="/DataScientist" element={<DataScientist />} />
          <Route path="/DevOpsEngineer" element={<DevOpsEngineer />} />
          <Route path="/UIUXDesigner" element={<UIUXDesigner />} />
          <Route path="/MachineLearningEngineer" element={<MachineLearningEngineer />} />
          <Route path="/MobileAppDeveloper" element={<MobileAppDeveloper />} />
          <Route path="/FullStackDeveloper" element={<FullStackDeveloper />} />
          <Route path="/CloudEngineer" element={<CloudEngineer />} />



          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



