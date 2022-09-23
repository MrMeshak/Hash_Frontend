import { IUser } from "../user/userModel";

export interface IAuthor {
  id: string;
  firstname: string;
  lastname: string;
  profileImg: string;
}

export interface IReply {
  id: string;
  content: string;

  createdAt: Date|null;
  updatedAt: Date|null;

  authorId:string;
  author: IAuthor;
}



export interface IComment{
  id: string;
  content: string;

  createdAt: Date|null;
  updatedAt: Date|null;

  authorId: string;
  author: IAuthor;

  replies: IReply[];
}

export interface IPost{
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  upVotes: number;

  createdAt: Date|null;
  updatedAt: Date|null;
  authorId: string;
  
  currentUserUpVote: boolean; 
  
  commentCount: number;
  comments: IComment[];
}

export interface IPostState{
  post: IPost
  loading: boolean;
  error: string;
}
