import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($id: ID!) {
    deleteBoard(boardId: $id)
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      likeCount
      dislikeCount
      images
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      likeCount
      dislikeCount
      images
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      title
      contents
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      likeCount
      dislikeCount
      images
    }
  }
`;

export const CREATE_BOARD_COMMENTS = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
