import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const BodyStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.bodyType};
    font-family: ${({ theme }) => theme.fonts.default};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
`;
