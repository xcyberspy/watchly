import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings';
import Loader from './components/Loader';
import Room from './pages/Room';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    </Router>
  );
}

function AppContent({ loading, setLoading }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Custom navigation function
  const navigateWithLoader = (to) => {
    setLoading(true);
    navigate(to);
  };

  // Effect to turn off loading after navigation
  React.useEffect(() => {
    setLoading(false);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<LandingPage navigateWithLoader={navigateWithLoader} />} />
        <Route path="/home" element={<HomePage navigateWithLoader={navigateWithLoader} />} />
        <Route path="/settings" element={<Settings navigateWithLoader={navigateWithLoader} />} />
        <Route path="/room" element={<Room navigateWithLoader={navigateWithLoader} />} />
      </Routes>
    </>
  );
}

export default App;
