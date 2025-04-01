import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => {
            acc[`${item.id}-${item.size}`] = item.quantity;
            return acc;
        }, {})
    );

    const [totalAmount, setTotalAmount] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            const key = `${item.id}-${item.size}`;
            const quantity = quantities[key] || 1;
            total += item.new_price * quantity;
        });
        setTotalAmount(total);
    }, [cartItems, quantities]);

    const handleQuantityChange = (itemId, itemSize, change) => {
        const key = `${itemId}-${itemSize}`;
        setQuantities((prevQuantities) => {
            const newQuantity = Math.max(1, (prevQuantities[key] || 1) + change);
            return { ...prevQuantities, [key]: newQuantity };
        });
    };

    const handlePlaceOrder = () => {
        if (cartItems.length > 0) {
            setOrderPlaced(true);
            setTimeout(() => {
                setOrderPlaced(false);
            }, 3000);
        }
    };
    return (
        <div className="cart-page">
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <button className="empty-cart-button" onClick={clearCart}>
                    Empty Cart
                </button>
            </div>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item) => {
                        const key = `${item.id}-${item.size}`;
                        return (
                            <li key={key} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <div className="item-info">
                                        <h3 className="item-title">{item.name}</h3>
                                        <p className="item-size">Size: {item.size || "N/A"}</p>
                                        <p className="item-seller">
                                            Seller: {item.seller || "KISHNAFAB"}
                                        </p>
                                    </div>
                                    <div className="item-pricing">
                                        <span className="discounted-price">₹{item.new_price}</span>
                                        <span className="original-price">₹{item.old_price}</span>
                                        <span className="discount-percent">
                                            {Math.round(
                                                ((item.old_price - item.new_price) / item.old_price) * 100
                                            )}
                                            % Off
                                        </span>
                                        <span className="offers">1 offer available </span>
                                    </div>
                                    <div className="item-actions">
                                        <div className="quantity-controls">
                                            <button
                                                className="quantity-button minus"
                                                onClick={() => handleQuantityChange(item.id, item.size, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{quantities[key] || 1}</span>
                                            <button
                                                className="quantity-button plus"
                                                onClick={() => handleQuantityChange(item.id, item.size, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button className="remove-button" onClick={() => removeFromCart(item.id, item.size)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="delivery-info">
                                    <p className="delivery-date">
                                        Delivery by Thu Feb 27 | ₹40 Free
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p className="total-amount">Total Amount: ₹{totalAmount}</p>
            <button className="place-order" onClick={handlePlaceOrder}>PLACE ORDER</button>
            {orderPlaced && (
                <div className="order-placed-popup">
                    <p>Your order is placed!</p>
                </div>
            )}
        </div>
    );
};

export default Cart;