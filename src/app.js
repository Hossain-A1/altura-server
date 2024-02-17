const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const hpp = require("hpp");
const { urlencoded } = require("body-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");
const mongoSanitize = require("express-mongo-sanitize");
const userRouter = require("../src/routes/user.route");

const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;
// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello developers" });
});

app.use("/api/auth",userRouter);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`App listen and mongoDB connect on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`DB error is => ${error}`);
  });
