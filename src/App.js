import React, { useState } from "react";
import NFTCard from "./components/NFTCard";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import NFTDetails from "./components/NFTDetails";
import { nftCollection } from "./data/nftData";
import "./App.css";

function App() {
  const [nfts, setNfts] = useState(nftCollection);
  const [filteredNfts, setFilteredNfts] = useState(nftCollection);
  const [selectedNft, setSelectedNft] = useState(null);
  const [filters, setFilters] = useState({
    artist: "all",
    category: "all",
  });
  const [sortBy, setSortBy] = useState("default");

  // Get unique artists and categories for filter dropdowns
  const artists = [...new Set(nftCollection.map((nft) => nft.artist))];
  const categories = [...new Set(nftCollection.map((nft) => nft.category))];

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    applyFiltersAndSort(newFilters, sortBy);
  };

  // Handle sort changes
  const handleSortChange = (value) => {
    setSortBy(value);
    applyFiltersAndSort(filters, value);
  };

  // Apply both filters and sort
  const applyFiltersAndSort = (currentFilters, currentSort) => {
    let result = [...nftCollection];

    // Apply filters
    if (currentFilters.artist !== "all") {
      result = result.filter((nft) => nft.artist === currentFilters.artist);
    }
    if (currentFilters.category !== "all") {
      result = result.filter((nft) => nft.category === currentFilters.category);
    }

    // Apply sorting
    switch (currentSort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sort by id
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredNfts(result);
  };

  // Handle NFT card click
  const handleCardClick = (nft) => {
    setSelectedNft(nft);
  };

  // Handle back from details
  const handleBack = () => {
    setSelectedNft(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 NFT Gallery</h1>
        <p className="subtitle">Discover • Collect • Invest</p>
      </header>

      <main className="app-main">
        {!selectedNft ? (
          <>
            <div className="gallery-header">
              <h2>Featured NFTs ({filteredNfts.length})</h2>
              <p className="gallery-description">
                Click on any NFT to view details
              </p>
            </div>

            <FilterBar
              onFilterChange={handleFilterChange}
              artists={artists}
              categories={categories}
            />

            <SortBar onSortChange={handleSortChange} />

            {filteredNfts.length === 0 ? (
              <div className="no-results">
                <h3>No NFTs found</h3>
                <p>Try adjusting your filters</p>
              </div>
            ) : (
              <div className="nft-grid">
                {filteredNfts.map((nft) => (
                  <NFTCard key={nft.id} nft={nft} onClick={handleCardClick} />
                ))}
              </div>
            )}
          </>
        ) : (
          <NFTDetails nft={selectedNft} onBack={handleBack} />
        )}
      </main>

      <footer className="app-footer">
        <p>
          © 2026 NFT Gallery | Built with React by Taha Ahmed | Appverse
          Internship Project
        </p>
      </footer>
    </div>
  );
}

export default App;
