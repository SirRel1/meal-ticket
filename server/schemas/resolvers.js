const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { Tech } = require('../models');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select(
					'-__v -password'
				);

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},

		savedRest: async () => {
			return Tech.find({});
		},
  },
		Mutation: {
      
        saveBook: async (parent,  args ) => {
          const rest = await Tech.create(args);
          return rest;
        },


			addUser: async (parent, args) => {
				const user = await User.create(args);
				const token = signToken(user);

				return { token, user };
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
			},

			removeRest: async (parent, { did }) => {
			  return Tech.findOneAndDelete({ resid: did });
			},

			// removeRest: async (parent,  id ) => {
			//   const removeOne = await Tech.findOneAndRemove(
			//     { resid:  id   },
			//   )
			//   return removeOne;
			// },

			// const updatedUser = await User.findOneAndUpdate(
			//   { _id: context.user._id },
			//   { $pull: { savedBooks: { bookId } } },
			//   { new: true }
			// );
			// saveBook: async (parent, { bookData }) => {

			//     const updatedUser = await User.findByIdAndUpdate(
			//       { $push: { savedBooks: bookData } },
			//       { new: true }
			//     );

			//     return updatedUser;

			// },
		},
	}
;

module.exports = resolvers;
