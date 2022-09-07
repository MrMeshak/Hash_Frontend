import { IUser } from "../user/userModel";

export interface IComment {
  id: string;
  content: string;

  createdAt: Date;
  updatedAt: Date;

  authorId: string;

  author: IUser | null;
  Replies: IReply[];
}

export interface IReply {
  id: string;
  content: string;

  authorId: string;

  author: IUser | null;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  upVotes: number;

  createdAt: Date | null;
  updatedAt: Date | null;

  authorId: string;

  author: IUser | null;
  userUpVoteList: IUser[];
  comments: IComment[];
}
