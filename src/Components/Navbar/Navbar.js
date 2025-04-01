import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../images/logo.jpg";
import cart_icon from "../images/cart_icon.png";
import search_icon from "../images/search_icon.png";
import wishlist_icon from "../images/wishlist_icon.png";
import login_icon from "../images/login_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useWishlist } from "../../Pages/WishlistContext";
import UserProfile from "../../Pages/UserProfile";

const Navbar = ({ getCartCount, isLoggedIn, handleLogout, userEmail }) => {
    const [menu, setMenu] = useState("Home");
    const [dropdowns, setDropdowns] = useState({ cloth: false, accessory: false });
    const [search, setSearch] = useState({ open: false, term: "" });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const navigate = useNavigate();
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const searchInputRef = useRef(null);
    const wishlistModalRef = useRef(null);
    const [suggestions, setSuggestions] = useState([]);
    const searchBoxRef = useRef(null);
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

    const navItems = [
        { term: "Home", path: "/" },
        { term: "Fashion", path: "/clothes" },
        { term: "Accessories", path: "/accessories" },
        { term: "Blog", path: "/blog" },
        { term: "Contact", path: "/contact" },
        { term: "Men's Clothing", path: "/clothes/men" },
        { term: "Women's Clothing", path: "/clothes/women" },
        { term: "Kids Clothing", path: "/clothes/kids" },
        { term: "Bags", path: "/accessories/bags" },
        { term: "Jewellery", path: "/accessories/jewellery" },
        { term: "Fragrance", path: "/accessories/fragrance" },
    ];

    useEffect(() => {
        if (search.open && searchInputRef.current) searchInputRef.current.focus();
        document.body.style.overflow = isMenuOpen || isWishlistOpen || isUserProfileOpen ? "hidden" : "auto";
        const handleResize = () => setIsMobileView(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [search.open, isMenuOpen, isWishlistOpen, isUserProfileOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (search.open && searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                clearSearch();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [search.open]);

    const toggleSearch = () => {
        if (search.open) {
            clearSearch();
        } else {
            setSearch({ ...search, open: true });
        }
    };

    const clearSearch = () => {
        setSearch({ open: false, term: "" });
        setSuggestions([]);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleWishlist = () => {
        if (search.open) {
            clearSearch();
        }
        setIsWishlistOpen(!isWishlistOpen);
    };

    const handleDropdown = (type) => {
        if (isMobileView) {
            setDropdowns({
                ...dropdowns,
                [type]: !dropdowns[type],
                cloth: type === "cloth" ? !dropdowns.cloth : false,
                accessory: type === "accessory" ? !dropdowns.accessory : false,
            });
        }
    };

    const handleDropdownItemClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
        setDropdowns({ cloth: false, accessory: false });
        window.scrollTo(0, 0);
    };

    const handleMouseEnter = (type) => !isMobileView && setDropdowns({ ...dropdowns, [type]: true });
    const handleMouseLeave = (type) => !isMobileView && setDropdowns({ ...dropdowns, [type]: false });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isWishlistOpen && wishlistModalRef.current && !wishlistModalRef.current.contains(event.target)) {
                setIsWishlistOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isWishlistOpen]);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearch({ ...search, term });
        if (term) {
            const filteredSuggestions = navItems.filter((suggestion) =>
                suggestion.term.toLowerCase().includes(term.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (path, term) => {
        navigate(path);
        clearSearch();
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter") {
            if (suggestions.length > 0) {
                handleSuggestionClick(suggestions[0].path, suggestions[0].term);
            } else if (search.term) {
                const foundItem = navItems.find(
                    (item) => item.term.toLowerCase() === search.term.toLowerCase()
                );
                if (foundItem) {
                    navigate(foundItem.path);
                    clearSearch();
                } else {
                    navigate(`/search?q=${search.term}`);
                    clearSearch();
                }
            }
        }
    };

    const handleLoginIconClick = () => {
        const storedLoginState = localStorage.getItem("isLoggedIn") === "true";

        if (storedLoginState) {
            setIsUserProfileOpen(!isUserProfileOpen);
            localStorage.setItem("isUserProfileOpen", String(!isUserProfileOpen));
        } else {
            navigate("/login");
        }
    };

    const closeUserProfile = () => {
        setIsUserProfileOpen(false);
    };

    const handleLogoutFromProfile = () => {
        handleLogout();
        setIsUserProfileOpen(false);
        localStorage.removeItem("isUserProfileOpen");
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
    };

    useEffect(() => {
        localStorage.setItem("isUserProfileOpen", isUserProfileOpen ? "true" : "false");
    }, [isUserProfileOpen]);

    useEffect(() => {
        if (isLoggedIn && localStorage.getItem('isUserProfileOpen') === "true") {
            setIsUserProfileOpen(true);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
        setIsUserProfileOpen(storedLoginState && localStorage.getItem("isUserProfileOpen") === "true");
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="nav-hamburger">
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} onClick={toggleMenu} />
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
                            <Link to="/">Home</Link> {menu === "home" && <div className="underline"></div>}
                        </li>
                        <li
                            onClick={() => handleDropdown("cloth")}
                            onMouseEnter={() => handleMouseEnter("cloth")}
                            onMouseLeave={() => handleMouseLeave("cloth")}
                            className="dropdown"
                        >
                            <>
                                <Link to="/clothes">Fashion</Link>
                                {(menu === "clothes"|| dropdowns.cloth) && <div className="underline"></div>}
                            </>
                            {dropdowns.cloth && (
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
                            onClick={() => handleDropdown("accessory")}
                            onMouseEnter={() => handleMouseEnter("accessory")}
                            onMouseLeave={() => handleMouseLeave("accessory")}
                            className="dropdown"
                        >
                            <>
                                <Link to="/accessories">Accessories</Link>
                                {(menu === "Accessories" || dropdowns.accessory) && <div className="underline"></div>}
                            </>
                            {dropdowns.accessory && (
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
                            <Link to="/blog">Blog</Link> {menu === "blog" && <div className="underline"></div>}
                        </li>
                        <li
                            onClick={() => {
                                setMenu("contact");
                                setIsMenuOpen(false);
                                navigate("/contact");
                            }}
                        >
                            <Link to="/contact">Contact</Link> {menu === "contact" && <div className="underline"></div>}
                        </li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <div
                        onClick={handleLoginIconClick}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img src={login_icon} alt="User Profile/Login" className="login-icon" />
                    </div>

                    <div className="search" onClick={toggleSearch}>
                        <img src={search_icon} alt="" />
                    </div>
                    <div className="wishlist" onClick={toggleWishlist}>
                        <img src={wishlist_icon} alt="" />
                    </div>
                    <div className="cart">
                        <Link to="/cart">
                            <img src={cart_icon} alt="" />
                        </Link>
                        <div className="cart-count">{getCartCount()}</div>
                    </div>
                </div>
                {search.open && (
                    <div className="search-box" ref={searchBoxRef}>
                        <input
                            type="text"
                            placeholder="Search..."
                            ref={searchInputRef}
                            value={search.term}
                            onChange={handleSearchChange}
                            onKeyPress={handleSearchKeyPress}
                        />
                        {search.term && <span className="close-icon" onClick={clearSearch}> &#x2715; </span>}
                        {suggestions.length > 0 && (
                            <ul className="search-suggestions">
                                {suggestions.map((item) => (
                                    <li
                                        key={item.term}
                                        onClick={() => handleSuggestionClick(item.path, item.term)}
                                    >
                                        {item.term}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
            {isWishlistOpen && (
                <div className="wishlist-overlay">
                    <div className="wishlist-modal" ref={wishlistModalRef}>
                        <div className="wishlist-header">
                            <h2>WISHLIST</h2>
                            <button className="close-wishlist" onClick={toggleWishlist}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <div className="wishlist-items">
                            {wishlistItems.length === 0 ? (
                                <p>Wishlist is Empty</p>
                            ) : (
                                <>
                                    {wishlistItems.map((item) => (
                                        <div key={item.id} className="wishlist-item">
                                            <img src={item.image} alt={item.name} />
                                            <div className="item-details">
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                                <p>Price: ${item.new_price}</p>
                                                <button onClick={() => removeFromWishlist(item.id)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isUserProfileOpen && (
                <div className="user-profile-overlay">
                    <UserProfile onClose={closeUserProfile} onLogout={handleLogoutFromProfile} />
                </div>
            )}
        </>
    );
};

export default Navbar;