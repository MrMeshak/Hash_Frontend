import axios from "axios";

export const axiosGql = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 4000,
});

export interface IKnownError {
  error: string;
}

export interface IGetLibrary {
  _: string;
}

export const getLibraryQuery = `
    query{
        getLibrary
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
        }
    }
`;
