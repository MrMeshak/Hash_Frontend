import styled from "styled-components";
import { ISideBarProps } from "./SideBar";

export const Container = styled.div<ISideBarProps>`
  height: 100%;
  width: 100%;
  top: 0px;
  position: fixed;
  z-index: 4;
  padding-top: 5rem;
  pointer-events: ${(props) => (props.sideBarOpen ? "auto" : "none")};
`;

export const Overlay = styled.div<ISideBarProps>`
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: black;
  opacity: ${(props) => (props.sideBarOpen ? "0.4" : "0")};
  pointer-events: ${(props) => (props.sideBarOpen ? "auto" : "none")};
  transition: opacity 0.5s ease;
`;

export const SideBarContainer = styled.div<ISideBarProps>`
  height: 100%;
  width: 18rem;
  z-index: 6;
  position: fixed;
  right: 0px;
  background-color: ${(props) => props.theme.colors.background};
  transform: translateX(${(props) => (props.sideBarOpen ? "0%" : "100%")});
  transition: transform 0.5s ease;
`;
