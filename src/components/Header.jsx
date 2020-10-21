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
    a {
      ${({ theme }) => theme.type.link}
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>
          <Link href="/">Benjamin Mikiten</Link>
        </h1>

        <Navigation />
      </div>
    </StyledHeader>
  );
};
export default Header;
