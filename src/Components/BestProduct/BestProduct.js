import React, { useState, useEffect } from "react";
import "./BestProduct.css";
import data_bp from "../images/best_img";
import toyData from "../images/Toys";
import furnitureData from "../images/Furniture";
import Item from "../Items/Item";
import { useNavigate } from "react-router-dom";

const productData = {
  default: { data: data_bp, type: "best" },
  Shoes: { data: data_bp, type: "best" },
  Toys: { data: toyData, type: "toys" },
  Furniture: { data: furnitureData, type: "furniture" },
};

const BestProduct = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(() => localStorage.getItem("selectedFilter") || "default");

  useEffect(() => {
    localStorage.setItem("selectedFilter", filter);
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data: filteredItems, type: currentType } = productData[filter] || productData.default;

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
            {...item}
            type={currentType}
            onClick={() => handleItemClick(item, currentType)}
          />
        ))}
      </div>
    </div>
  );
};

export default BestProduct;