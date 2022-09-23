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

export const getFilteredLibraryQuery = `
  query filteredPosts($filter: String!, $sort: String!) {
    filteredPosts(filter: $filter, sort: $sort){
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
`
export const addPostQuery =`
  mutation addPost($title: String!, $description: String!, $category: String!){
    addPost(title: $title, description: $description, category: $category){
      id
    }
  }
`

export interface IGetPost{
  authToken: string;
  postId: string;
}

export const getPostQuery = `
query post($postId: ID){
    post(postId: $postId){
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
      comments{
        id
        content
        createdAt
        updatedAt
        authorId
        author{
          id
          firstname
          lastname
          profileImg
        }
        replies{
          id
          content
          createdAt
          updatedAt
          authorId
          author{
            id
            firstname
            lastname
            profileImg
          }
        }
      }
    }
  }
`






