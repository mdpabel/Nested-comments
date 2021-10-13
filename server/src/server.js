const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const commentRoute = require("./routes/comment");

const app = express();
// DB
require("./db/mongoose");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(commentRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
