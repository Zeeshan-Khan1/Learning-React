import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header showHeaderContent={true} /><Home /><Footer /></>} />
          <Route path="/about" element={<><Header showHeaderContent={false} /><About /></>} />
          <Route path="/contact" element={<><Header showHeaderContent={false} /><Contact /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


