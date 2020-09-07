import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const BodyStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.bodyType};
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    font-size: 18px;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
`;
