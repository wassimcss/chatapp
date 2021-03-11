const Product = require("../model/Product");

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json({ products });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  reviews: async (req, res) => {
    try {
      const {rating} = req.body;
      if (rating && rating > 0) {
        const product = await Product.findById(req.params.id);
      
        if (!product) return res.status(404).json({ msg: "Product dosn't exist" });
        let num = product.numReviews;
        let rate = product.rating;
        await Product.findByIdAndUpdate(req.params.id, {
          rating: rate + rating,
          numReviews: num + 1,
        });
        return res.json({ msg: "Update success" });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { title, price, images, description,numReviews, rating } = req.body;
      const newProduct = new Product({title, price, images, description,numReviews, rating})
      const prod = await newProduct.save()
      res.send(prod)
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = productCtrl;
