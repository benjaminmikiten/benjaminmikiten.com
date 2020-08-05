import styled from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => theme.grid.LayoutContainer};
  h1 {
    ${({ theme }) => theme.type.largeHeader};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
