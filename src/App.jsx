import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Header from './component/Header';


function App() {
  return (
    <> 
      
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
