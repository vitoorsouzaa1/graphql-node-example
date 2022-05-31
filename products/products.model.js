const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 43.99,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 45.99,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
