 import {theme} from '../../styles/theme'
 import {IFilter, ILibPost, ILibrary, ISort} from '../library/libraryModel'

export interface IRoadMapLib{
  title: string;
  value: string;
  description: string;
  posts: ILibPost[];
}

export interface IRoadMapState{
  libraries: IRoadMapLib[]
  loading: boolean;
  error: string;
}

