import styled from "styled-components";
import { ISideBarProps } from "./SideBar";

export interface ISideBar{
  sideBarOpen: boolean
}



export const Container = styled.div<ISideBar>`
  height: 100%;
  width: 100%;
  top: 0px;
  position: fixed;
  z-index: 4;
  padding-top: 0rem;
  pointer-events: ${(props) => (props.sideBarOpen ? "auto" : "none")};
`;

export const Overlay = styled.button<ISideBar>`
  height: 100%;
  width: 100%;
  padding: 0;
  z-index: 5;
  position: fixed;
  border:none;
  background-color: black;
  opacity: ${(props) => (props.sideBarOpen ? "0.4" : "0")};
  transition: opacity 0.5s ease;
`;

export const SideBarContainer = styled.div<ISideBar>`
  height: 100%;
  width: 18rem;
  z-index: 6;
  position: fixed;
  right: 0px;
  padding-top: 5rem;
  background-color: ${(props) => props.theme.colors.background};
  transform: translateX(${(props) => (props.sideBarOpen ? "0%" : "100%")});
  transition: transform 0.5s ease;
`;
