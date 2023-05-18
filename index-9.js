// index.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/html-example", (req, res) => {
  try {
    res.sendFile("public/example-page.html", { root: __dirname });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
