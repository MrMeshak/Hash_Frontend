import axios from 'axios';
import { ILibPost } from '../store/library/libraryModel';

export const axiosGql = axios.create({
  baseURL: 'hashbackend-production.up.railway.app',
  timeout: 8000,
  withCredentials: true
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
  postId: string;
}

export interface IToggleUpVoteRes {
  postId: string;
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
`;
export const addPostQuery = `
  mutation addPost($title: String!, $description: String!, $category: String!){
    addPost(title: $title, description: $description, category: $category){
      id
    }
  }
`;

export interface IGetPost {
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
`;

export interface IAddComment {
  postId: string;
  content: string;
}

export const addCommentQuery = `
  mutation addComment($postId: ID, $content: String!){
    addComment(postId: $postId, content: $content){
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
`;

export interface IAddReply {
  commentId: string;
  content: string;
}

export const addReplyQuery = `
mutation addReply($commentId: ID, $content: String!){
  addReply(commentId: $commentId, content: $content){
    id
    content
    createdAt
    updatedAt
    commentId
    authorId
    author{
      id
      firstname
      lastname
      profileImg
    }
  }
}
`;

export interface IGetRoadMapLib {
  authToken: string;
  status: string;
}

export interface IGetRoadMapLibRes {
  status: string;
  posts: ILibPost[];
}

export const getRoadMapLibQuery = `
query postsByStatus($status: String!){
  postsByStatus(status: $status){
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

export const getLibraryCountByStatusQuery = `
query libraryCountByStatus($status: String!){
  libraryCountByStatus(status: $status)
}
`;

export const updatePostQuery = `
mutation updatePost($postId: ID!, $title: String!, $description: String!, $category: String!){
  updatePost(postId: $postId, title: $title, description: $description, category: $category){
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

export const deletePostQuery = `
mutation deletePost($postId: ID!){
  deletePost(postId: $postId){
    id
  }
}
`;
