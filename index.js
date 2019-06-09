const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/", (req, res) => {
  const colors = require("./css_colors.json");

  res.json(colors);
});
