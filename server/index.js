import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const listings = [
  {
    id: 1,
    title: "2BHK in Kadapa",
    price: 7500,
    city: "Kadapa",
    description: "Spacious house near RIMS Hospital",
    images: ["https://source.unsplash.com/featured/?house"],
    category: "2BHK"
  }
];

app.get("/listings", (req, res) => {
  res.json(listings);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
