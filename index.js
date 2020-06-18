const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "./public")));
const port = process.env.PORT || 80;

app.get("/api/dummy", (req, res) => {
  res.json({
    message: "first api",
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
