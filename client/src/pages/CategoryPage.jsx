import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { setListings } from "../redux/state";

// Remove this line if you don’t have List.scss
// import "../styles/List.scss";

const CategoryPage = () => {
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings || []);

  const getListingsByCategory = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/listings?category=${category}`
      );
      const data = await res.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.error("Fetch listings by category failed:", err.message);
    }
  };

  useEffect(() => {
    getListingsByCategory();
  }, [category]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">{category} Listings</h1>
      <div className="list">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <ListingCard key={listing._id || listing.id} {...listing} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No listings found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
