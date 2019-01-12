import gql from "graphql-tag";

const CREATE_GAME = gql`
  mutation CreateGame($game: CreateGameInput) {
    createGame(game: $game) {
      id
      author
      description
    }
  }
`;

const DELETE_GAME = gql`
  mutation DeleteGame($id: String!) {
    deleteGame(id: $id) {
      id
      author
      description
    }
  }
`;

export { CREATE_GAME, DELETE_GAME };