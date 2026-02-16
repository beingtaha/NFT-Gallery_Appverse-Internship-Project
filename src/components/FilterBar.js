import React from "react";
import "./FilterBar.css";

function FilterBar({ onFilterChange, artists, categories }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Filter by Artist:</label>
        <select onChange={(e) => onFilterChange("artist", e.target.value)}>
          <option value="all">All Artists</option>
          {artists.map((artist) => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Filter by Category:</label>
        <select onChange={(e) => onFilterChange("category", e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
