const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: async () => {
      const products = await productsModel.getAllProducts();
      return products;
    },
  },
};
