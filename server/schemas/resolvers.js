const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Order } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: { 
  items: async () => {
    return await Item.find();
  },
  item: async (parent, { itemId}) => {
    return await Item.findOne( { _id: itemId } );
  },

  user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findOne(context.user._id).populate({
        path: 'orders.items',
      });

      user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

      return user;
    }
    
    throw new AuthenticationError('Not logged in');
  },
  order: async (parent, { _id }, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({
        path: 'orders.items'
      });

      return user.orders.id(_id);
    }

    throw new AuthenticationError('Not logged in');
  },

  checkout: async (parent, args, context) => {
    const url = new URL(context.headers.referer).origin;
    const order = new Order({ items: args.items });
    const line_items = [];

    const { items } = await order.populate('items').execPopulate();

    for (let i = 0; i < items.length; i++) {
      // WHat is this below
      const items = await stripe.items.create({
        name: items[i].name,
        description: items[i].description,
        images: [`${url}/images/${items[i].image}`]
      });

      const price = await stripe.prices.create({
        item: item.id,
        unit_amount: items[i].price * 100,
        currency: 'usd',
      });

      line_items.push({
        price: price.id,
        quantity: 1
      });
    }
    // is this stripe variables
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/`
    });

    return { session: session.id };
  }
  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { items }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ items });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }



}

module.exports = resolvers;
