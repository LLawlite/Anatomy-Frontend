import React from 'react';
import '../styles/ProductCard.css';
function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-mrp">{product.mrp}/- Only</p>
    </div>
  );
}

export default ProductCard;
