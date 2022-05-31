const ordersModel = require('./orders.model');

module.exports = {
  Query: {
    orders: async () => {
      const orders = await ordersModel.getAllOrders();
      return orders;
    },
  },
};
