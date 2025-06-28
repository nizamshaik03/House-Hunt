const mongoose = require("mongoose");
const Listing = require("./models/Listing"); // adjust if path is different

mongoose.connect("mongodb://localhost:27017/househunt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dummyListings = [
  {
    listingPhotoPaths: ["public/images/kadapa1.jpg"],
    city: "Kadapa",
    province: "Andhra Pradesh",
    country: "India",
    category: "Apartment",
    type: "1 BHK",
    price: 800,
    description: "Spacious 1 BHK apartment near Kadapa RTC Bus Stand. Fully furnished with AC, TV, and WiFi.",
  },
  {
    listingPhotoPaths: ["public/images/kadapa2.jpg"],
    city: "Kadapa",
    province: "Andhra Pradesh",
    country: "India",
    category: "Villa",
    type: "3 BHK",
    price: 1500,
    description: "Independent villa near YSR circle with car parking, private garden, and inverter backup.",
  },
  {
    listingPhotoPaths: ["public/images/kadapa3.jpg"],
    city: "Kadapa",
    province: "Andhra Pradesh",
    country: "India",
    category: "Flat",
    type: "2 BHK",
    price: 1100,
    description: "Modern flat close to Seven Roads Circle. Gated community with lift and security.",
  }
];

async function seed() {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(dummyListings);
    console.log("✅ Listings inserted");
  } catch (error) {
    console.error("❌ Error inserting listings:", error);
  } finally {
    mongoose.connection.close();
  }
}

seed();
