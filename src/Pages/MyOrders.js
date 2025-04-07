import React, { useState, useEffect } from "react";
import "./MyOrders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MyOrders = ({ closeOrders }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = () => {
      try {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="my-orders-container">
        <div className="header-container">
          <button className="back-icon" onClick={closeOrders}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 className="orders-heading">My Orders</h2>
        </div>
        <p className="center-message">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-orders-container">
        <div className="header-container">
          <button className="back-icon" onClick={closeOrders}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 className="orders-heading">My Orders</h2>
        </div>
        <p className="center-message">Error fetching orders: {error.message}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="my-orders-container">
        <div className="header-container">
          <button className="back-icon" onClick={closeOrders}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 className="orders-heading">My Orders</h2>
        </div>
        <p className="center-message">No orders placed yet.</p>
      </div>
    );
  }

  return (
    <div className="my-orders-container">
      <div className="header-container">
        <button className="back-icon" onClick={closeOrders}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 className="orders-heading">My Orders</h2>
      </div>
      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <div className="order-details">
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Order Date:</strong> {order.date}
              </p>
              <p>
                <strong>Total:</strong> ${order.total}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Items:</strong>
              </p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId} className="order-product-details">
                    <img
                      src={item.image}
                      alt="Product"
                      className="order-item-image"
                    />
                    <div className="order-product-info">
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                      {item.size && <p>Size: {item.size}</p>}{" "}
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
