import {gql} from "@apollo/client";

export const GET_POST = gql`
    query Post (
     $id: Number!
  ) {
      post {
      id
      title
      }
  }
`;

