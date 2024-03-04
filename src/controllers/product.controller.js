const { default: mongoose } = require("mongoose");
const handleError = require("../errors/handleError");
const productModel = require("../models/product.model");
// get all product controller
const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    await handleError(error, res);
  }
};

// get a product controller
const getAProduct = async (req, res) => {
  const {sid} = req.params
  if(!mongoose.Types.ObjectId.isValid(sid) ){
    throw new Error("Invalid Id!")
  }

  try {
    const product = await productModel.findById(sid);
    res.status(200).json(product);
  } catch (error) {
    await handleError(error, res);
  }
};
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
  getAProduct
};
