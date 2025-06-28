import "../styles/Listings.scss"; // ✅ updated path
import ListingCard from "./ListingCard";
import listings from "../data/listingsData";

const Listings = () => {
  return (
    <div className="listings-container">
      <h2>Latest Properties in Kadapa</h2>
      <div className="listings-grid">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
