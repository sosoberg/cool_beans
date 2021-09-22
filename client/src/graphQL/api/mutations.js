import {gql} from '@apollo/client';


const CREATE_USER  = gql`
mutation createUser($username: String!, $email: String!, $password: String!){
    createUser(username: $username, email: $email, password: $password){
      token
      user{
        username
      }
    }
}

`
const LOGIN  = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user{
        username
      }
    }
}

`
const ADD_TO_CART = gql`
mutation addToCart($item: CartItem!){
  addToCart(item: $item) {
    cart{
      title
      size
      price
      dairy
      extra
    }
  }
}

`
const REMOVE_FROM_CART = gql`
mutation removeFromCart($_id: ID!){
  removeFromCart(_id: $_id) {
    username
  }
}

`
export {CREATE_USER, LOGIN, ADD_TO_CART, REMOVE_FROM_CART}