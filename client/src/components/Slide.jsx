// src/components/Slide.jsx
import "../styles/Slide.scss";

const Slide = () => {
  return (
    <div
      className="slide"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="slide_overlay">
        <h1>Find Your Dream House</h1>
        <p>Discover the best rental properties in your nearby areas.</p>
        <button className="slide_button">EXPLORE NOW</button>
      </div>
    </div>
  );
};

export default Slide;

