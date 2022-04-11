const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    resid: String
    imageurl: String
    name: String
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    savedRest: [Tech]
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    saveBook(resid: String!, imageurl: String, name: String): Tech
    removeRest(did: String!): Tech
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
