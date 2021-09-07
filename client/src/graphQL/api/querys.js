import { gql } from '@apollo/client';


const CURRENT_USER = gql`
query me{
    me{
        username
    }
}
`
const MENU = gql`
query Menu{
  Menu {
    _id
    title
    ingredients
    image
    allergens
    sizes
    prices
  }
}
`

export {CURRENT_USER, MENU}