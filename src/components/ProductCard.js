import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, collectionPage }) {
  return (
    <div className={`card ${collectionPage ? 'collection-card' : ''}`}>
      {/* Primary Image */}
      <img src={product.image} alt="Product" className="product-image" />

      {/* Secondary Image for Hover Effect */}
      {product.secondaryImage && (
        <img
          src={product.secondaryImage}
          alt="Product Hover"
          className="secondary-image"
        />
      )}

      <h3 className="product-name">{product.productName}</h3>
      <p className="product-mrp">{product.price}/- Only</p>
    </div>
  );
}

export default ProductCard;
