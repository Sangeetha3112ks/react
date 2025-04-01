import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Category from './Pages/Category';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Whislist from './Pages/Wishlist';
import BuyNow from './Pages/BuyNow';
import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct';
import BestProduct from './Components/BestProduct/BestProduct';
import ProductDetails from './Pages/ProductDetails';
import Shop from './Pages/Shop';
import { WishlistProvider } from './Pages/WishlistContext';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemExists = cartItems.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);
        if (itemExists) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id && cartItem.size === item.size
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId, itemSize) => {
        setCartItems(cartItems.filter(cartItem => !(cartItem.id === itemId && cartItem.size === itemSize)));
    };
    
    const clearCart = () => {
        setCartItems([]);
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <WishlistProvider>
            <>
                <Navbar cartItems={cartItems} removeFromCart={removeFromCart} getCartCount={getCartCount} />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/clothes" element={<FeaturedProduct />} />
                    <Route path="/clothes/men" element={<Category category="men" />} />
                    <Route path="/clothes/women" element={<Category category="women" />} />
                    <Route path="/clothes/kids" element={<Category category="kids" />} />
                    <Route path="/accessories" element={<BestProduct />} />
                    <Route path="/accessories/bags" element={<Category category="bags" />} />
                    <Route path="/accessories/jewellery" element={<Category category="jewellery" />} />
                    <Route path="/accessories/fragrance" element={<Category category="fragrance" />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
                    <Route path="/product/:id/:type" element={<ProductDetails addToCart={addToCart} />} />
                    <Route path="/buynow/:type/:id/:selectedSize" element={<BuyNow />} />
                    <Route path="/wishlist" element={<Whislist />} />
                </Routes>
                <Footer />
            </>
        </WishlistProvider>
    );
}

export default App;