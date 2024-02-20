const handleError = require("../errors/handleError");
const productModel = require("../models/product.model");
// get all product controller
const getAllProduct = async () => {};
// create product controller
const createProduct = async (req, res) => {
  const {
    title,
    description,
    category,
    price,
    size,
    colors,
    images,
    store,
    brand,
    rating,
  } = req.body;
  if (
    !title ||
    !description ||
    !category ||
    !images ||
    !colors ||
    !price ||
    !size ||
    !store ||
    !brand ||
    !rating
  ) {
    throw new Error("Please provide all data");
  }

  try {
    const data = await productModel.create({
      title,
      description,
      category,
      price,
      size,
      colors,
      images,
      store,
      brand,
      rating,
    });

    res.status(200).json(data);
  } catch (error) {
    await handleError(error, res);
  }
};

module.exports = {
  getAllProduct,
  createProduct,
};
