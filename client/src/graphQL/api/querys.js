import { gql } from "@apollo/client";

const CURRENT_USER = gql`
  query me {
    me {
      username
      cart {
        title
        _id
        size
        price
        extra
        dairy
      }
    }
  }
`;
const MENU = gql`
  query Menu {
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
`;
const PROTECTED_MENU = gql`
  query ProtectedMenu {
    ProtectedMenu {
      _id
      title
      ingredients
      image
      allergens
      sizes
      prices
    }
  }
`;


export { CURRENT_USER, MENU, PROTECTED_MENU};
