import React from "react";
import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => theme.grid.LayoutContainer};
  padding-bottom: 0.5rem;
  > div {
    padding: 0.5rem 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightGrey};
  }
  h1 {
    ${({ theme }) => theme.type.largeTitle};
    a {
      color: ${({ theme }) => theme.colors.interactive};
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          color: ${({ theme }) => theme.colors.interactiveHover};
        }
      }
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
      </div>
    </StyledHeader>
  );
};
export default Header;
