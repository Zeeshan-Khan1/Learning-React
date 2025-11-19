import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='showcase' id="showcase">
        <div className="container">
          <div className="row row1">
            <div className="img-box">
              <img src="/img/showcase-photo3.jpg" alt="Deganvy, U.K" />
            </div>
            <div className="text-box">
              <h2 className='lg-heading text-black'>SWAT, PAKISTAN</h2>
              <p className='text-gray'>A lush green valley with peaceful rivers, cool breezes and stunning mountain views—Swat is a perfect nature escape in Pakistan.</p>

                <Link to="/about" className='btn btn-secondary'>More</Link>
            </div>
          </div>
          <div className="row row2">
            <div className="img-box">
              <img src="/img/showcase-photo1.jpg" alt="Desert, Egypt" />
            </div>
            <div className="text-box">
              <h2 className='lg-heading text-black'>SKARDU, PAKISTAN</h2>
              <p className='text-gray'>A breathtaking region of lakes, deserts and glowing sunsets—Skardu captures the true beauty of northern Pakistan.

              </p>
              <Link to="/about" className='btn btn-secondary'>More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-1">
              <i className="fas fa-route fa-2x text-red"></i>
              <h2 className="md-heading">Adventure</h2>
              <p>Discover exciting destinations filled with thrill, beauty, and unforgettable moments.</p>
            </div>
            <div className="box box-2">
              <i className="fas fa-strikethrough fa-2x"></i>
              <h2 className="md-heading">Less Price</h2>
              <p>Enjoy amazing travel experiences at affordable prices without compromising quality.</p>
            </div>
            <div className="box box-3">
              <i className="fas fa-user-check fa-2x text-red"></i>
              <h2 className="md-heading">Experice</h2>
              <p>Explore new cultures, meet new people, and create lifelong memories around the world.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;



