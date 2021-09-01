import { gql, useMutation } from '@apollo/client';


const CURRENT_USER = gql`
query me{
    me{
        username
    }
}
`
export {CURRENT_USER}