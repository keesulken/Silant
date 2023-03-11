import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './pages/app/Header';
import Home from './pages/Home';
import Machine from './pages/Machine';
import Maintenance from './pages/app/Maintenance';
import Reclamation from './pages/Reclamation';
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/reclamation" element={<Reclamation />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;