import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import clothData from '../ClothProducts';
import dataproduct from '../AccessoriesProduct';
import bestProducts from '../Components/images/best_img';
import featuredProducts from '../Components/images/featured_img';
import './BuyNow.css';

const BuyNow = ({ isLoggedIn }) => {
    const { type, id, selectedSize } = useParams();
    const [product, setProduct] = useState(null);
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestAddress, setGuestAddress] = useState('');
    const [isGuestCheckout, setIsGuestCheckout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let productData;

        if (type === 'best') {
            productData = bestProducts;
        } else if (type === 'featured') {
            productData = featuredProducts;
        } else if (clothData[type]) {
            productData = clothData[type];
        } else if (dataproduct[type]) {
            productData = dataproduct[type];
        }

        const foundProduct = productData?.find((p) => p.id === parseInt(id));

        setProduct(foundProduct);
    }, [id, type]);

    const handleGuestCheckout = () => {
        setIsGuestCheckout(true);
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleGuestSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    if (isLoggedIn) {
        return (
            <div className="buy-now-page">
                <div className="buy-now-product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="buy-now-product-details">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.new_price}</p>
                    <p>Size: {selectedSize}</p>
                    <button>Proceed</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="buy-now-page">
                <h2>Checkout</h2>
                {!isGuestCheckout ? (
                    <div>
                        <button onClick={handleLoginRedirect}>Login and Checkout</button>
                        <button onClick={handleGuestCheckout}>Guest Checkout</button>
                    </div>
                ) : (
                    <div className="buy-now-product-details">
                        <form onSubmit={handleGuestSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={guestName}
                                onChange={(e) => setGuestName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={guestEmail}
                                onChange={(e) => setGuestEmail(e.target.value)}
                            />
                            <textarea
                                placeholder="Shipping Address"
                                value={guestAddress}
                                onChange={(e) => setGuestAddress(e.target.value)}
                            />
                            <button type="submit">Submit Guest Order</button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
};

export default BuyNow;