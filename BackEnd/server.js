const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 7500;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    // No need to parse password as integer
    console.log(username, password);   
    // Compare strings, no need for parseInt
    if (username == "Test" && password == 123) {
      res.status(200).json({
        message: 'User found',
      });
      // console.log("Done")
    } else {
      res.status(404).json({
        message: 'User not found',
      });
      // console.log("Not Done")
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
