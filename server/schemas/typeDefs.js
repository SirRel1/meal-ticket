const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Item {
  _id: ID
  name: String
  description: String
  image: String
  price: Float
}

type Order {
  _id: ID
  purchaseDate: String
  items: [Item]
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  orders: [Order]
}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Query {
  items(name: String): [Item]
  item(itemId: ID!): Item
  user: User
  order(_id: ID!): Order
  checkout(items: [ID]!): Checkout
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  addOrder(items: [ID]!): Order
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  login(email: String!, password: String!): Auth
}



`;

module.exports = typeDefs;
