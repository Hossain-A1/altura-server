const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    store: {
      type: Number,
      required: true,
    },

    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const productModel = model("Product", productSchema);

module.exports = productModel;
