import React from "react";
import "./NFTCard.css";

function NFTCard({ nft, onClick }) {
  return (
    <div className="nft-card" onClick={() => onClick(nft)}>
      <div className="nft-image-container">
        <img src={nft.image} alt={nft.name} className="nft-image" />
        <div className="nft-price-badge">Rs. {nft.price.toLocaleString()}</div>
      </div>

      <div className="nft-info">
        <h3 className="nft-name">{nft.name}</h3>
        <p className="nft-artist">by {nft.artist}</p>
        <p className="nft-category">{nft.category}</p>
      </div>
    </div>
  );
}

export default NFTCard;
