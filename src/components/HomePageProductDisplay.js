import React from 'react';
import ProductCard from './ProductCard';
import '../styles/HomePageProductDisplay.css';

function HomePageProductDisplay({ heading, description, products }) {
  return (
    <div className="products-display-section">
      <h2 className='product-display-heading"'>{heading}</h2>
      <p className="product-display-description">{description}</p>
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
      <button
        className="view-all-button"
        onClick={() => alert('Navigate to All Products')}
      >
        View All
      </button>
    </div>
  );
}

export default HomePageProductDisplay;
