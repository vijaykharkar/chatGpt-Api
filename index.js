const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.post("/data", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Hello, ${name}! Your email is ${email}.` });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
