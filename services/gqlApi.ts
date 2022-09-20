import axios from "axios";

export const axiosGql = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 4000,
  withCredentials: true,
});

export interface IKnownError {
  error: string;
}

export interface IGetLibrary {
  authToken: string;
}

export const getLibraryQuery = `
    query{
        posts
        {
            id
            title
            description
            category
            status
            upVotes
            createdAt
            updatedAt
            authorId
            currentUserUpVote
            commentCount
        }
    }
`;

export interface ICurrentUser {
  authToken: string;
}

export const getCurrentUserQuery = `
  query {
    currentUser{
      id
      email
      firstname
      lastname
      profileImg
      createdAt
      updatedAt
    }
  }
`;

export interface IToggleUpVote {
  postId: string,
}

export interface IToggleUpVoteRes{
  postId: string
}

export const toggleUpVoteQuery = `
  mutation toggleUpVote($postId: ID){
    toggleUpVote(postId: $postId){
       id
    }
  }
`;
