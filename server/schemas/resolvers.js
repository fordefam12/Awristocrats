const { User, Watch, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    watches: async (parent, { brandName, gender }) => {
      const params = {};

      if (brandName) {
        params.brandName = brandName;
      }

      if (gender) {
        params.gender = gender;
      }

      return await Watch.find(params);
    },
    watch: async (parent, { _id }) =>{
      return await Watch.findById(_id)
    },
    //
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate({
          path: 'orders',
          populate: 'watches',
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw AuthenticationError;
    },
    //
    order: async (parent, {_id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate({
          path: 'orders',
          populate: 'watches',
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
  },
  //
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //
    addOrder: async (parent, { watches }, context) => {
      if (context.user) {
        const order = new Order({ watches });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return await order.populate('watches');
      }

      throw AuthenticationError;
    },
    //

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
