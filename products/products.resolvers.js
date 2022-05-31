const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: async () => {
      const products = await productsModel.getAllProducts();
      return products;
    },
    productsByPrice: (parent, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
};
