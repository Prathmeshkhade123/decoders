const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001; // You can change this port as needed

// Enable CORS to allow requests from different origins
app.use(cors());

// Sample data for cards
const tiles = [
  { id: 1, title: "Phone Covers" },
  { id: 2, title: "Headphones" },
  { id: 3, title: "Charging Cables" },
  // Add more card items here
];

// Route to fetch all cards
app.get("/api/tiles", (req, res) => {
  res.json(tiles);
});

// TABS

// Sample data for cards
const cards = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  // Add more card items here
];

// Route to fetch all cards
app.get("/api/cards", (req, res) => {
  res.json(cards);
});

// UPCOMING TASKS

// Enable CORS to allow requests from different origins
app.use(cors());

// Sample data for tasks
const tasks = [
  { id: 1, title: "Step One" },
  { id: 2, title: "Step Two" },
  { id: 3, title: "Step Three" },
  // Add more task items here
];

// Route to fetch all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

//FEATURES

const features = [
  { id: 1, title: "Feature 1" },
  { id: 2, title: "Feature 2" },
  { id: 3, title: "Feature 3" },
  { id: 4, title: "Feature 4" },
  { id: 5, title: "Feature 5" },
  { id: 6, title: "Feature 6" },
  { id: 7, title: "Feature 7" },
  { id: 8, title: "Feature 8" },
  { id: 9, title: "Feature 9" },
  { id: 10, title: "Feature 10" },
  // Add more feature items here
];

// Sample data for users
const users = [
  { id: 1, name: "John Peter", code: "SBS20" },
  { id: 2, name: "Jane Doe", code: "ABC123" },
  { id: 3, name: "Mike Smith", code: "XYZ456" },
  { id: 4, name: "Mike Smith", code: "XYZ456" },
  { id: 5, name: "Mike Smith", code: "XYZ456" },
  { id: 6, name: "Mike Smith", code: "XYZ456" },
  { id: 7, name: "Mike Smith", code: "XYZ456" },
  // Add more user items here
];

// Route to fetch all features
app.get("/api/features", (req, res) => {
  res.json(features);
});

// Route to fetch all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
