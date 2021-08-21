const {gql} = require("apollo-server-express")
module.exports = gql`
type User{
    id: ID!
    username: String!
    email: String!
    password: String!
}
type Product{
    id: ID!
    title: String!
    ingredients: String!
    allergens: String!
    size: String

}


`