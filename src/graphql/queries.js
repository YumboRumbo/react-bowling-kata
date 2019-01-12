import gql from "graphql-tag";

const GET_GAME = gql`
  query Game($id: String!) {
    game(id: $id) {
      id
      author
      description
    }
  }
`;

const GET_GAMES = gql`
  query Games {
    games {
      id
      author
      description
    }
  }
`;

export { GET_GAME, GET_GAMES };