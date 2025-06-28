import React from "react";
import "../styles/ListingCard.scss";

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.image} alt={listing.title} />
      <div className="info">
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
        <p className="price">₹ {listing.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ListingCard;
