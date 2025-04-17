import React, { createContext, useState, useContext } from "react";
import LoginPopup from "./LoginPopup";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [likedItemIds, setLikedItemIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };

  const addToWishlist = (item) => {
    if (isLoggedIn()) {
      setWishlistItems((prevItems) => {
        if (!prevItems.some((existingItem) => existingItem.id === item.id)) {
          setLikedItemIds((prevIds) => [...prevIds, item.id]);
          return [...prevItems, item];
        }
        return prevItems;
      });
    } else {
      setIsModalOpen(true);
    }
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
    setLikedItemIds((prevIds) => prevIds.filter((id) => id !== itemId));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        likedItemIds,
        addToWishlist,
        removeFromWishlist,
        isModalOpen,
        closeModal,
      }}
    >
      {children}
      {isModalOpen && <LoginPopup onClose={closeModal} />}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
