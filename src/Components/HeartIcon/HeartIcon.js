import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import "./HeartIcon.css";
import { useWishlist } from "../../Pages/WishlistContext";

const HeartIcon = ({ id, name, image, new_price, old_price }) => {
  const { addToWishlist, removeFromWishlist, likedItemIds } = useWishlist();
  const isLiked = likedItemIds.includes(id);

  const handleClick = () => {
    const wishlistItem = { id, name, image, new_price, old_price };
    isLiked ? removeFromWishlist(id) : addToWishlist(wishlistItem);
  };

  return (
    <div className="hearticon" onClick={handleClick}>
      <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} className={isLiked ? "hearticon-filled" : ""} />
    </div>
  );
};

export default HeartIcon;