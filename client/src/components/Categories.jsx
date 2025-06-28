import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";

const updatedCategories = [
  {
    label: "Apartments",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Villas",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Studios",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Independent Houses",
    img:"/assets/modern_cat.webp", 
  },
{
  label: "PGs",
  img:"/assets/5.jpg",
},
  {
    label: "Farm Houses",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", 
  },
];


const Categories = () => {
  return (
    <div className="categories">
      <h1 style={{ color: "white" }}>Explore Top Categories</h1>
      <p>
        Explore our wide range of vacation rentals that cater to all types of
        travelers. Immerse yourself in the local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </p>

      <div className="categories_list">
        {updatedCategories.map((category, index) => (
          <Link to={`/properties/category/${category.label}`} key={index}>
            <div className="category">
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
