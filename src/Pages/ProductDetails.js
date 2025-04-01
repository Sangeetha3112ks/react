import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import clothData from '../ClothProducts';
import dataproduct from '../AccessoriesProduct';
import bestProducts from '../Components/images/best_img';
import featuredProducts from '../Components/images/featured_img';
import toyData from '../Components/images/Toys';
import furnitureData from '../Components/images/Furniture';

const ProductDetails = ({ addToCart }) => {
    const { id, type } = useParams();
    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [showSizePopup, setShowSizePopup] = useState(false);
    const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
    const navigate = useNavigate();
    const isClothOrFeatured = type === 'featured' || !!clothData[type];
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    useEffect(() => {
        window.scrollTo(0, 0);

        let productData;

        if (type === 'best') {
            productData = bestProducts;
        } else if (type === 'featured') {
            productData = featuredProducts;
        } else if (clothData[type]) {
            productData = clothData[type];
        } else if (dataproduct[type]) {
            productData = dataproduct[type];
        } else if (type === 'toys') {
            productData = toyData;
        } else if (type === 'furniture') {
            productData = furnitureData;
        }

        const foundProduct = productData?.find((p) => p.id === id);

        setProduct(foundProduct);
    }, [id, type]);

    const toggleRating = (star) => setRating(rating === star ? 0 : star);

    const displayStars = () => {
        const stars = Array.from({ length: 5 }, (_, i) => (
            <span
                key={i + 1}
                className={`star ${i + 1 <= rating ? 'filled' : ''}`}
                onClick={() => toggleRating(i + 1)}
            >
                &#9733;
            </span>
        ));
        return stars;
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size);
    };

    const handleAddToCart = () => {
        if (!isUserLoggedIn) {
            navigate('/login');
            return;
        }

        if (isClothOrFeatured && !selectedSize) {
            setShowSizePopup(true);
            return;
        }

        addToCart({
            ...product,
            size: selectedSize,
        });

        setShowAddToCartPopup(true);
        setTimeout(() => {
            setShowAddToCartPopup(false);
        }, 1000);
    };

    const handleBuyNow = () => {
        if (!isUserLoggedIn) {
            navigate('/login');
            return;
        }

        if (isClothOrFeatured && !selectedSize) {
            setShowSizePopup(true);
            return;
        }

        navigate(`/buynow/${type}/${id}/${selectedSize}`);
    };

    return (
        <div className="product-detail-page">
            {product && (
                <>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-details">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <div className="star-ratings">{displayStars()}</div>
                        <div className="price">
                            <span className="new-price">${product.new_price}</span>
                            <span className="old-price">${product.old_price}</span>
                        </div>
                        {isClothOrFeatured && (
                            <>
                                <div className="colors">
                                    <p>Colors</p>
                                    <div className="color-circles">
                                        {product.colors && Array.isArray(product.colors) && product.colors.map((color, index) => (
                                            <div
                                                key={index}
                                                className="color-circle"
                                                style={{ backgroundColor: color }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="size-selection">
                                    <p>Size</p>
                                    <div className="size-buttons">
                                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                            <button
                                                key={size}
                                                className={`size-button ${selectedSize === size ? 'active' : ''}`}
                                                onClick={() => handleSizeClick(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="actions">
                            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                        </div>
                    </div>
                </>
            )}
            {showSizePopup && (
                <div className="size-popup">
                    <div className="size-popup-content">
                        <h3>Please select a size.</h3>
                        <div className="popup-actions">
                            <button onClick={() => setShowSizePopup(false)}>OK</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddToCartPopup && (
                <div className="add-to-cart-popup">
                    <div className="add-to-cart-popup-content">
                        <h3>Added to cart!</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;