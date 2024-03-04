const express = require("express");
const stripePayment = require("../controllers/payment.controller");

const paymentRouter = express.Router();

paymentRouter.post("/create-checkout-session", stripePayment);

module.exports = paymentRouter;
