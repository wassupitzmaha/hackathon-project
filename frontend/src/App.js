import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import FrontEndDeveloper from './features/professions/components/FrontEndDeveloper.jsx';



function App() {
  return (
    <BrowserRouter>

      <AppNavbar />
      
      <div className="container mt-4">

        <Routes>
          <Route path="/FrontEndDeveloper" element={<FrontEndDeveloper />} />

          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



