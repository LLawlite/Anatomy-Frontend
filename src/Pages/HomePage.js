import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import '../styles/HomePage.css';
import Introduction from '../components/Introduction';
import ExploreOffersBTN from '../components/ExploreOffersBTN';
import HomePageProductDisplay from '../components/HomePageProductDisplay';
import image from '../assets/images/product.jpg';
function HomePage() {
  const bestPicksProducts = [
    {
      id: 1,
      image: image,
      name: 'Product 1',
      mrp: '₹999',
    },
    {
      id: 2,
      image: image,
      name: 'Product 2',
      mrp: '₹1499',
    },
    {
      id: 3,
      image: image,
      name: 'Product 3',
      mrp: '₹1999',
    },
  ];
  const bestSellersProducts = [
    {
      id: 1,
      image: image,
      name: 'Product 4',
      mrp: '₹999',
    },
    {
      id: 2,
      image: image,
      name: 'Product 5',
      mrp: '₹1499',
    },
    {
      id: 3,
      image: image,
      name: 'Product 6',
      mrp: '₹1999',
    },
  ];
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-body">
        <Banner />
      </div>
      <Introduction />
      <ExploreOffersBTN />
      <HomePageProductDisplay
        products={bestSellersProducts}
        heading="Best Seller's"
        description={'Top Picks That Never Go Out of Fashion'}
      />
      <HomePageProductDisplay
        products={bestPicksProducts}
        heading="Top Picks That Never Go Out of Fashion"
        description={'Top Picks That Never Go Out of Fashion'}
      />

      {/* <div className="banner-container">
        <Banner />
      </div> */}
    </div>
  );
}

export default HomePage;
