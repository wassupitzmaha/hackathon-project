import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import FrontEndDeveloper from './features/professions/components/FrontEndDeveloper.jsx';
import BackEndDeveloper from './features/professions/components/BackEndDeveloper.jsx';
import CybersecurityAnalyst from './features/professions/components/CybersecurityAnalyst.jsx';
import DataScientist from './features/professions/components/DataScientist.jsx';
import DevOpsEngineer from './features/professions/components/DevOpsEngineer.jsx'
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
          <Route path="CybersecurityAnalyst" element={<CybersecurityAnalyst />} />
          <Route path="DataScientist" element={<DataScientist />} />
          <Route path="DevOpsEngineer" element={<DevOpsEngineer />} />



          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



