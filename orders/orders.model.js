const orders = [
  {
    date: '2020-5-10',
    subtotal: 84.98,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old Red Shoe',
          price: 42.99,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
