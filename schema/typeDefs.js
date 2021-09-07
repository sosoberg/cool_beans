const {gql} = require("apollo-server-express")
module.exports = gql`
type User{
    _id: ID!
    username: String!
    email: String!
    password: String!
}

type Product{
    _id: ID!
    title: String!
    image: String
    ingredients: String!
    allergens: String!
    sizes: String
    prices: String
}

type Auth{
    user: User
    token: ID!
}

type Query{
    me:User
    Menu: [Product]
   

}
type Mutation{
    login(email: String!, password: String!):Auth
    createUser(username: String!, email: String!, password: String!):Auth
}


`