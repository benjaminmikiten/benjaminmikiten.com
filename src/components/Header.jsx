import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Navigation } from "./Navigation";

export const StyledHeader = styled.header`
  ${({ theme }) => theme.grid.LayoutContainer};
  padding-bottom: 2rem;
  > div {
    padding: 0.5rem 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightGrey};
  }
  h1 {
    ${({ theme }) => theme.type.largeTitle};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Benjamin Mikiten</h1>

        <Navigation />
      </div>
    </StyledHeader>
  );
};
export default Header;
