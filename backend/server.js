const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS for frontend requests (if needed)
app.use(
  cors({
    origin: "http://localhost:3000", // For local development (adjust for production later)
  })
);

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, "frontend/build")));

// A simple API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Catch-all route to serve React's index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
