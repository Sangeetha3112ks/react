import React from 'react'
import { useWishlist } from './WishlistContext'
import './Wishlist.css'

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    return (
        <div className="wishlist-page">
            <h2>Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul className="wishlist-items">
                    {wishlistItems.map((item) => (
                        <li key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.name} className="wishlist-item-image" />
                            <p className="wishlist-item-name">{item.name}</p>
                            <button onClick={() => removeFromWishlist(item.id)} className="wishlist-item-remove">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;