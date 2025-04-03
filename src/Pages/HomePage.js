import React, { useEffect, useState } from 'react';
import apiconfig from '../config/apiconfig';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import '../styles/HomePage.css';
import Introduction from '../components/Introduction';
import ExploreOffersBTN from '../components/ExploreOffersBTN';
import HomePageProductDisplay from '../components/HomePageProductDisplay';
import image from '../assets/images/product.jpg';
import Footer from '../components/Footer';

function HomePage() {
  const [bestSellersProducts, setBestSellersProducts] = useState([]);
  const [bestPicksProducts, setBestPicksProducts] = useState([]);
  const [isBestSellerLoading, setISBestSellerLoading] = useState(true);
  const [isBestPeakLoading, setIsBestPeakLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        console.log('Hellow world');
        const response = await apiconfig.get(
          '/api/public/products/bestsellers'
        ); // Base URL already set in api.js
        setBestSellersProducts(response.data.content);
        console.log(response.data.content);
      } catch (err) {
        setError(err.message || 'Failed to fetch best sellers');
      } finally {
        setISBestSellerLoading(false);
      }
    };
    const fetchBestPeak = async () => {
      try {
        const response = await apiconfig.get('/api/public/products/'); // Base URL already set in api.js
        setBestPicksProducts(response.data.content);
        console.log(response.data.content);
      } catch (err) {
        setError(err.message || 'Failed to fetch best sellers');
      } finally {
        setIsBestPeakLoading(false);
      }
    };
    fetchBestSellers();
    fetchBestPeak();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-body">
        <Banner />
      </div>
      <Introduction />
      <ExploreOffersBTN />
      <HomePageProductDisplay
        key={1}
        products={bestSellersProducts}
        heading="Best Seller's"
        description={'Top Picks That Never Go Out of Fashion'}
      />
      <HomePageProductDisplay
        key={2}
        products={bestPicksProducts}
        heading="Top Picks That Never Go Out of Fashion"
        description={'Top Picks That Never Go Out of Fashion'}
      />
      {/* <AnimatedText /> */}

      {/* <div className="banner-container">
        <Banner />
      </div> */}
      <Footer />
    </div>
  );
}

export default HomePage;
