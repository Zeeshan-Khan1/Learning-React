import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className='lg-heading text-black about-heading'>About Us</h2>
        <p className="text-gray">We are dedicated to presenting the diverse beauty of Pakistan through modern, visually appealing web experiences. Our platform features handpicked locations, detailed descriptions, and high-quality visuals that showcase the cultural and natural richness of our country.
          Our mission is to promote local tourism by providing informative and engaging content for travelers, students, and photography enthusiasts. With a passion for creativity and technology, we aim to deliver a smooth and inspiring browsing experience that highlights Pakistan’s most remarkable destinations.
        </p>
        <div className="about-wrapper">
          <div className="left">
            <ul>
              <li>Promoting the natural beauty and culture of Pakistan.</li>
              <li>Providing accurate and inspiring travel information.</li>
              <li>Delivering clean, modern, and user-friendly web experiences.</li>
            </ul>

          </div>
          <div className="right">
            <ul>
              <li>Handpicked locations with detailed descriptions.</li>
              <li>High-quality images for a visually engaging experience.</li>
              <li>A platform designed for travelers, students, and explorers.</li>
            </ul>
          </div>
        </div>

        <div className="counts">
          <div className="count-item count-item1">
            <span>2500</span>
            <p>Travelled</p>
          </div>
          <div className="count-item count-item2">
            <span>500</span>
            <p>Places</p>
          </div>
          <div className="count-item count-item3">
            <span>400</span>
            <p>Guide</p>
          </div>
          <div className="count-item count-item4">
            <span>20</span>
            <p>Sport</p>
          </div>
        </div>

        <div className="cta-banner">
          <div className="cta-banner-left">
            <p className="cta-line">What are you waiting for, reach us right now.</p>
          </div>
          <div className="cta-banner-right">
            <Link to="/contact" className='btn-cta'>Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



