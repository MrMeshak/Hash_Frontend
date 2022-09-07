export interface ILibPost {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  upVotes: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  authorId: string;
  currentUserUpVote: boolean;
}

export interface ILibrary {
  posts: ILibPost[];
  filteredPosts: ILibPost[];
  filter: string;
  sort: string;
}

export interface ILibraryState {
  library: ILibrary;
  loading: boolean;
  error: string;
}
