import React, { useState, useEffect } from 'react' 
import './BestProduct.css'
import data_bp from '../images/best_img'
import toyData from '../images/Toys'
import furnitureData from '../images/Furniture'
import Item from '../Items/Item'
import { useNavigate } from 'react-router-dom'

const BestProduct = () => {
    const navigate = useNavigate();

    const [filter, setFilter] = useState(() => {
        return localStorage.getItem('selectedFilter') || 'default';
    });

    useEffect(() => {
        localStorage.setItem('selectedFilter', filter);
    }, [filter]);

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
    };

    let filteredItems = [];
    let currentType = 'best';

    if (filter === 'default' || filter === 'Shoes') {
        filteredItems = data_bp;
        currentType = 'best';
    } else if (filter === 'Toys') {
        filteredItems = toyData;
        currentType = 'toys';
    } else if (filter === 'Furniture') { 
        filteredItems = furnitureData;
        currentType = 'furniture'; 
    } else {
        filteredItems = data_bp;
        currentType = 'best';
    }

    const handleItemClick = (item, type) => {
        navigate(`/product/${item.id}/${type}`);
    };

    return (
        <div className="bestproduct">
            <h1>BEST PRODUCTS</h1>
            <hr />
            <div className="filter-dropdown">
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="default">Default</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Toys">Toys</option>
                    <option value="Furniture">Furniture</option> 
                </select>
            </div>
            <div className="best-item">
                {filteredItems.map((item, i) => (
                    <Item
                        key={item.id || i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        type={currentType}
                        onClick={() => handleItemClick(item, currentType)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestProduct;