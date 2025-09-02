const express = require("express");
const app = express();

// Render geeft je PORT in process.env.PORT
const PORT = process.env.PORT || 3000;

// Statische bestanden (indien je HTML/CSS/JS hebt in "public")
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Je Node.js app draait nu 24/7 op Render!");
});

app.listen(PORT, () => {
  console.log(`✅ Server draait op http://localhost:${PORT}`);
});
