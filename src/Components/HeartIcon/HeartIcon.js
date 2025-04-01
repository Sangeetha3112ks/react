import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import "./HeartIcon.css";
import { useWishlist } from "../../Pages/WishlistContext";

const HeartIcon = (props) => {
    const { addToWishlist, removeFromWishlist, likedItemIds } = useWishlist();
    const isLiked = likedItemIds.includes(props.id);

    const handleClick = () => {
        const wishlistItem = {
            id: props.id,
            name: props.name,
            image: props.image,
            new_price: props.new_price,
            old_price: props.old_price,
        };

        if (isLiked) {
            removeFromWishlist(props.id);
        } else {
            addToWishlist(wishlistItem);
        }
    };

    return (
        <div className="hearticon" onClick={handleClick}>
            {isLiked ? (
                <FontAwesomeIcon icon={faHeartSolid} className="hearticon-filled" />
            ) : (
                <FontAwesomeIcon icon={faHeartRegular} />
            )}
        </div>
    );
};

export default HeartIcon;