import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const storedItems = localStorage.getItem('wishlistItems');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (item) => {
        setWishlistItems((prevItems) => {
            if (!prevItems.some((existingItem) => existingItem.id === item.id)) {
                return [...prevItems, item];
            }
            return prevItems;
        });
    };

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);