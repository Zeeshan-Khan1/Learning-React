import React from 'react';
import './Navbar.css';

function Navbar() {
  // function that runs when a button is clicked
  const handleClick = () => {
    
    alert("Welcome to the Navbar!");
  };

  return (
    <nav className="navbar">

      <ul>
        <li onClick={handleClick}>Home</li>
        <li onClick={handleClick}>About</li>
        <li onClick={handleClick}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;


// must function start with file name 
// file name start with capital 
// and function must shoiuld return some html


