const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
if (!stripe) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripePayment = async (req, res) => {
  try {
    const { items } = req.body;
    const selectedItem = items.map((item) => ({
      quantity: 1,
      price_data: {
        currency: "USD",
        unit_amount: +(item.price * 100).toFixed(2),
        product_data: {
          name: item.title,
          images: [item.images[0]],
        },
      },
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: selectedItem,
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error in createStripeCheckout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = stripePayment;
