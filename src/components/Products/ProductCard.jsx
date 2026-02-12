import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.images[0]} 
          style={{objectFit: "contain"}}
          alt={product.title}
          onError={(e) => {
            e.target.src = 'https://i.pinimg.com/736x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg';
          }}
        />
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-slug">#{product.slug}</p>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        
        <div className="product-meta">
          <small>Created: {formatDate(product.creationAt)}</small>
          <small>Updated: {formatDate(product.updatedAt)}</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;