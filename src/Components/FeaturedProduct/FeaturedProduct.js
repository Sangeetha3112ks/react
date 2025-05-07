import React, { useState } from "react";
import "./FeaturedProduct.css";
import data_fp from "../images/featured_img";
import Item from "../Items/Item";

const FeaturedProduct = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => setFilter(e.target.value);

  const sortedItems = [...data_fp].sort((a, b) => {
    if (filter === "lowToHigh") return a.new_price - b.new_price;
    if (filter === "highToLow") return b.new_price - a.new_price;
    return 0;
  });

  return (
    <div className="featured">
      <h1>FEATURED PRODUCTS</h1>
      <hr />
      <div className="filter-dropdown">
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="featured-item">
        {sortedItems.map((item, i) => (
          <Item key={i} {...item} type="featured" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;