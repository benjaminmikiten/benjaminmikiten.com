import React from "react";
import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
  position: relative;
  break-inside: avoid;
  &:not(:last-child) {
    padding-bottom: 1.2em;
  }
  &:before {
    content: "+";
    position: absolute;
    left: -1em;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  padding-left: 1em;
  /* border-left: solid 1px ${({ theme }) => theme.colors.white}; */
`;

export const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export const List = ({ children }) => {
  // this used to do more
  return <StyledList>{children}</StyledList>;
};
