import React from "react";
import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
  &:not(:last-child) {
    padding-bottom: 1rem;
  }
`;
export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding-left: 1rem;
  border-left: solid 1px ${({ theme }) => theme.colors.white};
`;

export const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};
export const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};
