const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    resid: String
    imageurl: String
    name: String
  }

  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    me: User
  }

  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(firstname: String!, lastname: String!, email: String!, password: String!): Auth
    }
  

  type Query {
    savedRest: [Tech]
  }
  
  type Mutation {
    saveBook(resid: String!, imageurl: String, name: String): Tech
    removeRest(did: String!): Tech
  }
`;
    // saveBook(resid: String!, imageurl: String, name: String): Tech
    // removeRest(did: String!): Tech
    // createMatchup(tech1: String!, tech2: String!): Matchup
    // createVote(_id: String!, techNum: Int!): Matchup
  


module.exports = typeDefs;
