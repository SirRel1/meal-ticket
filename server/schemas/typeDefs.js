const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID!
  username: String!
  email: String
  
}

type Query {
  me: User
}

type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth 
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
