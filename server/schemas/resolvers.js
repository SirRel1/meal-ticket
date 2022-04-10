const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
   
    savedRest: async () => {
      return Tech.find({});
    },
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    saveBook: async (parent,  args ) => {
      const rest = await Tech.create(args);
      return rest;
    },

    // removeRest: async (parent,  args ) => {
    //   const removeOne = await Tech.findOneAndDelete(
    //     resid: args);
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
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
