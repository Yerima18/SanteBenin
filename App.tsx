
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diseases from './pages/Diseases';
import DiseaseDetail from './pages/DiseaseDetail';
import Prevention from './pages/Prevention';
import Emergency from './pages/Emergency';
import Vaccination from './pages/Vaccination';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maladies" element={<Diseases />} />
          <Route path="/maladies/:slug" element={<DiseaseDetail />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/urgences" element={<Emergency />} />
          <Route path="/vaccination" element={<Vaccination />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
