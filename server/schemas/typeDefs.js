const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    title: String!
    bookId: String!
    description: String
    authors: [String]
    image: String
    link: String
  }

  input BookInput {
    title: String!
    bookId: String!
    description: String
    authors: [String]
    image: String
    link: String
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeBook(bookId: String!): User
    saveBook(input: BookInput): User
  }
`;

module.exports = typeDefs;
