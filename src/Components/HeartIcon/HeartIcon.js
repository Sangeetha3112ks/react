import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import "./HeartIcon.css";
import { useWishlist } from "../../Pages/WishlistContext";

const HeartIcon = (props) => {
    const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();
    const [isActive, setIsActive] = useState(
        wishlistItems.find((item) => item.id === props.id) ? true : false 
    );

    const handleClick = () => {
        if (isActive) {
            removeFromWishlist(props.id);
        } else {

            const wishlistItem = {
                id: props.id,
                name: props.name,
                image: props.image,
                new_price: props.new_price,
                old_price: props.old_price,
            };
            addToWishlist(wishlistItem);
        }
        setIsActive(!isActive);
    };

    return (
        <div className="hearticon" onClick={handleClick}>
            {isActive ? (
                <FontAwesomeIcon icon={faHeartSolid} className="hearticon-filled" />
            ) : (
                <FontAwesomeIcon icon={faHeartRegular} />
            )}
        </div>
    );
};

export default HeartIcon;