const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  watches: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Watch'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;