const {gql} = require("apollo-server-express")
module.exports = gql`
type User{
    _id: ID!
    username: String!
    email: String!
   
    cart: [CartItems]
}

type Product{
    _id: ID!
    title: String!
    image: String
    ingredients: String!
    allergens: String!
    sizes: [String]
    prices: [String]
}
input CartItem{
    title: String!
    size: String!
    price: String!
    extra: [String]
    dairy: String

}
type CartItems{
    title: String
    _id: ID
    size: String
    price: String
    extra: [String]
    dairy: String

}



type Auth{
    user: User
    token: ID!
}

type Query{
    me:User
    Menu: [Product]
    ProtectedMenu: [Product]
   

}
type Mutation{
    login(email: String!, password: String!):Auth
    createUser(username: String!, email: String!, password: String!):Auth
    addToCart(item: CartItem): [CartItems]
}


`