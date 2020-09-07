import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => theme.grid.LayoutContainer};
  > div {
    border-bottom: solid 1px ${({ theme }) => theme.colors.white};
  }
  h1 {
    ${({ theme }) => theme.type.largeHeader};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Benjamin Mikiten</h1>
      </div>
    </StyledHeader>
  );
};
export default Header;
