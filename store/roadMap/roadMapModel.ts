 import {theme} from '../../styles/theme'
 import {ILibraryState} from '../library/libraryModel'


export interface IRoadMapState{
  plannedLib: ILibraryState
  inprogressLib: ILibraryState
  liveLib: ILibraryState
}

export interface IStatus{
  title: string;
  value: string;
  color: string;
}
 
export const statusList:IStatus[] = [
  {title: "", value: "NONE", color: "transparent"},
  {title: "Planned", value: "PLANNED", color: theme.colors.primaryAccent},
  {title: "In Progress", value: "INPROGRESS", color: theme.colors.primary},
  {title: "Live", value: "LIVE", color: theme.colors.secondaryAccent}
]