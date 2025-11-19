import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showHeaderContent = false }) => {
  const headerStyle = showHeaderContent ? {
    position: 'relative',
    height: '95vh',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/header-image.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <header className={showHeaderContent ? 'header' : ''} style={headerStyle}>
      <nav className={showHeaderContent ? 'navbar' : 'navbar bg-dark'}>
        <div className="container">
          <h1 className='logo lg-heading text-light'>WT With Zeeshan khan </h1>
          <ul className='nav-items'>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      {showHeaderContent && (
        <div className="header-content">
          <h1 className='lg-heading text-light main-heading'>travel the world</h1>
          <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
          <a href="#showcase" className='btn btn-primary text-red md-heading'>Explore Places</a>
        </div>
      )}
    </header>
  );
};

export default Header;


