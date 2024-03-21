require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors'); 
const path = require("path")
const { expressjwt } = require('express-jwt');

const app = express();

// Middleware
app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));
app.use(cors()); 
app.use(express.static(path.join(__dirname, "client", "dist")));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Routes
app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api/notes', require('./routes/notesRouter'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  return res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
