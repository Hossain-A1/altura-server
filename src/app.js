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
const productRoute = require("../src/routes/product.route");
const paymentRoute = require("../src/routes/payment.router");

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
// bypass all routes
app.use("/api/auth", userRouter);
app.use("/api/products", productRoute);
app.use("/api", paymentRoute);

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
