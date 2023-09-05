const typeDefs =`
type Watch {
    _id: ID
    referenceNumber: String
    watchName: String
    gender: String
    watchDescription: String
    brandName: String
    brandLogo: String
    caliberImage: String
    imageURL: String
    price: Float
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    orders: [Order]
}

type Order {
    _id: ID
    purchaseDate: String
    watches: [Watch]
}

type Auth {
    token: ID
    user: User
  }

type Query {
    watches(brandName: String, gender: String): [Watch]
    watch(_id: ID!): Watch
}

type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(watches: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`
module.exports = typeDefs;