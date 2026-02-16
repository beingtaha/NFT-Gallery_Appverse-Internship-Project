import React from "react";
import "./NFTDetails.css";

function NFTDetails({ nft, onBack }) {
  if (!nft) return null;

  return (
    <div className="details-overlay">
      <div className="details-modal">
        <button className="close-btn" onClick={onBack}>
          ×
        </button>

        <div className="details-content">
          <div className="details-image-container">
            <img src={nft.image} alt={nft.name} className="details-image" />
          </div>

          <div className="details-info">
            <h2 className="details-name">{nft.name}</h2>
            <p className="details-artist">by {nft.artist}</p>

            <div className="details-meta">
              <div className="meta-item">
                <span className="meta-label">Price</span>
                <span className="meta-value">
                  Rs. {nft.price.toLocaleString()}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value">{nft.category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Likes</span>
                <span className="meta-value">❤️ {nft.likes}</span>
              </div>
            </div>

            <div className="details-description">
              <h3>Description</h3>
              <p>{nft.description}</p>
            </div>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTDetails;
