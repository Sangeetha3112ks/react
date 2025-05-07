import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import clothData from "../ClothProducts";
import dataproduct from "../AccessoriesProduct";
import bestProducts from "../Components/images/best_img";
import featuredProducts from "../Components/images/featured_img";
import "./BuyNow.css";

const productSources = {
  best: bestProducts,
  featured: featuredProducts,
  ...Object.fromEntries(Object.keys(clothData).map(key => [key, clothData[key]])),
  ...Object.fromEntries(Object.keys(dataproduct).map(key => [key, dataproduct[key]])),
};

const BuyNow = ({ isLoggedIn }) => {
  const { type, id, selectedSize } = useParams();
  const [product, setProduct] = useState(null);
  const [guestInfo, setGuestInfo] = useState({ name: "", email: "", address: "" });
  const [isGuestCheckout, setIsGuestCheckout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const productData = productSources[type];
    const foundProduct = productData?.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, type]);

  const handleGuestCheckout = () => setIsGuestCheckout(true);
  const handleLoginRedirect = () => navigate("/login");
  const handleGuestSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleGuestInputChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo(prev => ({ ...prev, [name]: value }));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="buy-now-page">
      {isLoggedIn ? (
        <>
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
        </>
      ) : (
        <>
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
                  name="name"
                  value={guestInfo.name}
                  onChange={handleGuestInputChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={guestInfo.email}
                  onChange={handleGuestInputChange}
                />
                <textarea
                  placeholder="Shipping Address"
                  name="address"
                  value={guestInfo.address}
                  onChange={handleGuestInputChange}
                />
                <button type="submit">Submit Guest Order</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BuyNow;