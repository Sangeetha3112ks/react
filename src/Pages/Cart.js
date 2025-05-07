import React, { useState, useEffect, useCallback } from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const initialQuantities = cartItems.reduce((acc, item) => {
    acc[`${item.id}-${item.size}`] = item.quantity;
    return acc;
  }, {});
  const [quantities, setQuantities] = useState(initialQuantities);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const quantity = quantities[`${item.id}-${item.size}`] || 1;
      return sum + item.new_price * quantity;
    }, 0);
    setTotalAmount(total);
  }, [cartItems, quantities]);

  const handleQuantityChange = useCallback((itemId, itemSize, change) => {
    const key = `${itemId}-${itemSize}`;
    setQuantities((prev) => ({ ...prev, [key]: Math.max(1, (prev[key] || 1) + change) }));
  }, []);

  const handlePlaceOrder = useCallback(() => {
    if (cartItems.length > 0) {
      const orderItems = cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: quantities[`${item.id}-${item.size}`] || 1,
        price: item.new_price,
        image: item.image,
        size: item.size,
        description: item.description,
      }));
      const newOrder = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(),
        total: totalAmount,
        status: "Placed",
        items: orderItems,
      };
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));
      clearCart();
      setOrderPlaced(true);
      setTimeout(() => setOrderPlaced(false), 3000);
    }
  }, [cartItems, quantities, totalAmount, clearCart]);

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
            const quantity = quantities[key] || 1;
            const discountPercent = Math.round(((item.old_price - item.new_price) / item.old_price) * 100);
            return (
              <li key={key} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div className="item-info">
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-size">Size: {item.size || "N/A"}</p>
                    <p className="item-seller">Seller: {item.seller || "KISHNAFAB"}</p>
                  </div>
                  <div className="item-pricing">
                    <span className="discounted-price">₹{item.new_price}</span>
                    <span className="original-price">₹{item.old_price}</span>
                    <span className="discount-percent">{discountPercent}% Off</span>
                    <span className="offers">1 offer available </span>
                  </div>
                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button className="quantity-button minus" onClick={() => handleQuantityChange(item.id, item.size, -1)}>
                        -
                      </button>
                      <span className="quantity">{quantity}</span>
                      <button className="quantity-button plus" onClick={() => handleQuantityChange(item.id, item.size, 1)}>
                        +
                      </button>
                    </div>
                    <button className="remove-button" onClick={() => removeFromCart(item.id, item.size)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="delivery-info">
                  <p className="delivery-date">Delivery by Thu Feb 27 | ₹40 Free</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="total-amount">Total Amount: ₹{totalAmount}</p>
      <button className="place-order" onClick={handlePlaceOrder}>
        PLACE ORDER
      </button>
      {orderPlaced && (
        <div className="order-placed-popup">
          <p>Your order is placed!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;