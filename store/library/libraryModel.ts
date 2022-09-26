import {theme} from '../../styles/theme'

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
  commentCount: number;
}

export interface ILibrary {
  posts: ILibPost[];
  filter: IFilter;
  sort: ISort;
}

export interface ILibraryState {
  library: ILibrary;
  loading: boolean;
  error: string;
}

export interface IFilter{
  title: string;
  value: string;
}

export interface ISort{
  title: string;
  value: string;
}

export interface ICategory{
  title: string;
  value: string;
}

export const sortList:ISort[] = [
    {title:"Newest", value:"dateDesc"},
    {title: "Oldest", value:"dateAsc"},
    {title: "Most Upvotes", value: "upVotesDesc"},
    {title: "Least Upvotes", value: "upVotesAsc"}, 
    {title: "Most Comments", value: "commentCountDesc"}, 
    {title:"Least Comments", value: "commentCountAsc"}
  ]

  export const filterList:IFilter[] = [
    {title:"All" , value:""},
    {title:"UI" , value:"UI"},
    {title:"UX" , value:"UX"},
    {title:"Enhancement" , value:"Enhancement"},
    {title:"Feature" , value:"Feature"},
  ]

  export const categoryList:ICategory[] = [
    {title:"UI" , value:"UI"},
    {title:"UX" , value:"UX"},
    {title:"Enhancement" , value:"Enhancement"},
    {title:"Feature" , value:"Feature"},
  ]

  
  