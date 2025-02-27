import {gql} from "@apollo/client";

export const ACTIVE_CUSTOMER_QUERY = gql`
  query ActiveCustomer {
    activeCustomer {
      id
      emailAddress
      firstName
      lastName
    }
  }
`;