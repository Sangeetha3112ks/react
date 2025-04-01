import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../images/logo.jpg";
import cart_icon from "../images/cart_icon.png";
import search_icon from "../images/search_icon.png";
import wishlist_icon from "../images/wishlist_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useWishlist } from "../../Pages/WishlistContext";

const Navbar = ({ getCartCount }) => {
    const [menu, setMenu] = useState("Home");
    const [isClothDropdownOpen, setIsClothDropdownOpen] = useState(false);
    const [isAccessoryDropdownOpen, setIsAccessoryDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();
    const { wishlistItems } = useWishlist();

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const updateSearch = (e) => setSearchTerm(e.target.value);
    const clearSearch = () => {
        setSearchTerm("");
        setIsSearchOpen(false);
        if (searchInputRef.current) searchInputRef.current.focus();
    };

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) searchInputRef.current.focus();
    }, [isSearchOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
            if (!isMobileView) {
                if (isMenuOpen) {
                    setIsMenuOpen(false);
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },);

    const handleClothClick = () => {
        if (isMobileView) {
            if (isClothDropdownOpen) {
                setIsClothDropdownOpen(false);
            } else {
                setIsClothDropdownOpen(true);
                setIsAccessoryDropdownOpen(false);
            }
        }
    };

    const handleAccessoryClick = () => {
        if (isMobileView) {
            if (isAccessoryDropdownOpen) {
                setIsAccessoryDropdownOpen(false);
            } else {
                setIsAccessoryDropdownOpen(true);
                setIsClothDropdownOpen(false);
            }
        }
    };

    const handleDropdownItemClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
        setIsClothDropdownOpen(false);
        setIsAccessoryDropdownOpen(false);
    };

    const handleClothMouseEnter = () => {
        if (!isMobileView) {
            setIsClothDropdownOpen(true);
        }
    };

    const handleClothMouseLeave = () => {
        if (!isMobileView) {
            setIsClothDropdownOpen(false);
        }
    };

    const handleAccessoryMouseEnter = () => {
        if (!isMobileView) {
            setIsAccessoryDropdownOpen(true);
        }
    };

    const handleAccessoryMouseLeave = () => {
        if (!isMobileView) {
            setIsAccessoryDropdownOpen(false);
        }
    };

    return (
        <div className="navbar">
            <div className="nav-hamburger">
                <FontAwesomeIcon
                    icon={isMenuOpen ? faTimes : faBars}
                    onClick={toggleMenu}
                />
            </div>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Daxone</p>
            </div>
            <div className={`navmenus ${isMenuOpen ? "open" : ""}`}>
                <ul className="nav-menu">
                    <li
                        onClick={() => {
                            setMenu("home");
                            setIsMenuOpen(false);
                            navigate("/");
                        }}
                    >
                        <Link to="/">Home</Link>
                        {menu === "home" && <div className="underline"></div>}
                    </li>

                    <li
                        onClick={handleClothClick}
                        onMouseEnter={handleClothMouseEnter}
                        onMouseLeave={handleClothMouseLeave}
                        className="dropdown"
                    >
                        <Link to="/clothes">clothes</Link>
                        {(menu === "clothes" || isClothDropdownOpen) && (
                            <div className="underline"></div>
                        )}
                        {isClothDropdownOpen && (
                            <ul className="dropdown-content">
                                <li onClick={() => handleDropdownItemClick("/clothes/men")}>
                                    <Link to="/clothes/men">For Men</Link>
                                </li>
                                <li onClick={() => handleDropdownItemClick("/clothes/women")}>
                                    <Link to="/clothes/women">For Women</Link>
                                </li>
                                <li onClick={() => handleDropdownItemClick("/clothes/kids")}>
                                    <Link to="/clothes/kids">For Kids</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onClick={handleAccessoryClick}
                        onMouseEnter={handleAccessoryMouseEnter}
                        onMouseLeave={handleAccessoryMouseLeave}
                        className="dropdown"
                    >
                        <Link to="/accessories">Accessories</Link>
                        {(menu === "Accessories" || isAccessoryDropdownOpen) && (
                            <div className="underline"></div>
                        )}
                        {isAccessoryDropdownOpen && (
                            <ul className="dropdown-content">
                                <li onClick={() => handleDropdownItemClick("/accessories/bags")}>
                                    <Link to="/accessories/bags">Bags</Link>
                                </li>
                                <li onClick={() => handleDropdownItemClick("/accessories/jewellery")}>
                                    <Link to="/accessories/jewellery">Jewellery</Link>
                                </li>
                                <li onClick={() => handleDropdownItemClick("/accessories/fragrance")}>
                                    <Link to="/accessories/fragrance">Fragrance</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("blog");
                            setIsMenuOpen(false);
                            navigate("/blog");
                        }}
                    >
                        <Link to="/blog">Blog</Link>
                        {menu === "blog" && <div className="underline"></div>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("contact");
                            setIsMenuOpen(false);
                            navigate("/contact");
                        }}
                    >
                        <Link to="/contact">Contact</Link>
                        {menu === "contact" && <div className="underline"></div>}
                    </li>
                </ul>
            </div>
            <div className="nav-icons">
                <div className="search" onClick={toggleSearch}>
                    <img src={search_icon} alt="" />
                </div>
                <div
                    className="wishlist"
                    onClick={() => navigate("/wishlist")}
                >
                    <img src={wishlist_icon} alt="" />
                    <div className="wishlist-count">{wishlistItems.length}</div>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <img src={cart_icon} alt="" />
                    </Link>
                    <div className="cart-count">{getCartCount()}</div>
                </div>
            </div>
            {isSearchOpen && (
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        ref={searchInputRef}
                        value={searchTerm}
                        onChange={updateSearch}
                    />
                    {searchTerm && (
                        <span className="close-icon" onClick={clearSearch}>
                            {" "}
                            &#x2715;{" "}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;