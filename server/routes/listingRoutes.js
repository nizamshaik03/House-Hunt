import express from 'express';
const router = express.Router();

// Dummy listings from Kadapa
router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      title: "2BHK Near RTC Bus Stand",
      price: "₹7,500/month",
      location: "RTC Colony, Kadapa",
      image: "https://via.placeholder.com/300x200?text=RTC+Colony+2BHK"
    },
    {
      id: 2,
      title: "Single Room for Bachelors",
      price: "₹3,000/month",
      location: "NGOs Colony, Kadapa",
      image: "https://via.placeholder.com/300x200?text=NGOs+Colony+Room"
    },
    {
      id: 3,
      title: "3BHK Spacious House",
      price: "₹12,000/month",
      location: "Chinnachowk, Kadapa",
      image: "https://via.placeholder.com/300x200?text=Chinnachowk+3BHK"
    },
    {
      id: 4,
      title: "1RK near YV University",
      price: "₹4,000/month",
      location: "Putlampalli, Kadapa",
      image: "https://via.placeholder.com/300x200?text=YVU+Hostel+Room"
    },
    {
      id: 5,
      title: "2BHK with Parking",
      price: "₹9,500/month",
      location: "RIMS Road, Kadapa",
      image: "https://via.placeholder.com/300x200?text=RIMS+Road+2BHK"
    },
    {
      id: 6,
      title: "Luxury Villa for Rent",
      price: "₹20,000/month",
      location: "Khajipet Bypass, Kadapa",
      image: "https://via.placeholder.com/300x200?text=Khajipet+Villa"
    }
  ]);
});

export default router;
