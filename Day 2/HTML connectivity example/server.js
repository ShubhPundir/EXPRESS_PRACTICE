// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// console.log(__dirname)

// Middleware to log each request
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log(next);
    // console.log(req);
    // console.log(res);
    next(); // Pass control to the next middleware or route
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set up a route for the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
