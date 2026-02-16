import React from "react";
import "./SortBar.css";

function SortBar({ onSortChange }) {
  return (
    <div className="sort-bar">
      <div className="sort-group">
        <label>Sort by:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;
