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
export {CREATE_USER, LOGIN}