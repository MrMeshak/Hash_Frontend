import {theme} from '../styles/theme'

export const statusValues = ["PLANNED", "INPROGRESS", "LIVE"]

export const statusValuesMap = new Map([
  ["PLANNED", {title: "Planned", color: theme.colors.primaryAccent, libraryIndex: 0 }],
  ["INPROGRESS", {title: "In Progress", color: theme.colors.primary, libraryIndex: 1}],
  ["LIVE",{title: "Live", color: theme.colors.secondaryAccent, libraryIndex: 2 }]
])