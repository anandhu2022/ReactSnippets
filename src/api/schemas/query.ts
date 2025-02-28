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

export const GET_SLIDER_IMAGES = gql`
query {
  products(options: { take: 20 }) {
    items {
      featuredAsset {
        preview
      }
    }
  }
}
`;