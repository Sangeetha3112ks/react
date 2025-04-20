import React, { useState } from "react";
import "./FeaturedProduct.css";
import data_fp from "../images/featured_img";
import Item from "../Items/Item";

const FeaturedProduct = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = data_fp.slice();
  if (filter === "lowToHigh") {
    filteredItems.sort((a, b) => a.new_price - b.new_price);
  } else if (filter === "highToLow") {
    filteredItems.sort((a, b) => b.new_price - a.new_price);
  }

  return (
    <div className="featured">
      <h1>FEATURED PRODUCTS</h1>
      <hr />
      <div className="filter-dropdown">
        <label htmlFor="filter">Filter By:</label> {/* ADDED THIS LABEL */}
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="featured-item">
        {filteredItems.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            type="featured"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;