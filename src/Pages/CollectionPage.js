import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiconfig from '../config/apiconfig';
import '../styles/CollectionPage.css'; // Import CSS
import Navbar from '../components/Navbar';
import collectionVideoDesktopAndTab from '../assets/videos/Collection (desktop & Tab).mp4';
import collectionVideoMobile from '../assets/videos/Collection (Mobile).mp4';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { FiArrowLeft } from 'react-icons/fi';

const CollectionPage = () => {
  const { categoryId } = useParams(); // Get categoryId from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoSource, setVideoSource] = useState(collectionVideoDesktopAndTab);
  const [videoPadding, setVideoPadding] = useState(200); // initial gap
  const navigate = useNavigate();

  // Function to handle the Scroll-Aware UI
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Shrink padding to a minimum of 50px
      const newPadding = Math.max(50, 300 - scrollY);
      setVideoPadding(newPadding);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to detect screen size and update video
  useEffect(() => {
    const updateVideo = () => {
      if (window.innerWidth <= 768) {
        setVideoSource(collectionVideoMobile);
      } else {
        setVideoSource(collectionVideoDesktopAndTab);
      }
    };

    updateVideo(); // Run initially
    window.addEventListener('resize', updateVideo);

    return () => window.removeEventListener('resize', updateVideo);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await apiconfig.get(
          `api/public/categories/${categoryId}/products`
        );
        console.log('Collection: ', products);
        setProducts(response.data.content);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); // Fetch new products when categoryId changes

  return (
    <>
      <Navbar />
      <div className="collection-page">
        {/* ✅ Go Back Button */}
        <div className="go-back-container">
          <button className="go-back-button" onClick={() => navigate(-1)}>
            <FiArrowLeft className="back-icon" />
            Back
          </button>
        </div>
        {/* Video Section */}
        <div className="collection-video">
          <video src={videoSource} autoPlay loop muted />
        </div>

        {/* Product Section */}
        <div
          className="products-container"
          style={{
            paddingTop: `${videoPadding}px`,
            transition: 'padding-top 0.4s ease',
          }}
        >
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {products.length === 0 && !loading && <p>No products found.</p>}

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.productId}
                product={product}
                collectionPage={true}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollectionPage;
