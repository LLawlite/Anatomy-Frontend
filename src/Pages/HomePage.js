import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import '../styles/HomePage.css';
import Introduction from '../components/Introduction';

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-body">
        <Banner />
      </div>
      <Introduction />
      {/* <div className="banner-container">
        <Banner />
      </div> */}
    </div>
  );
}

export default HomePage;
