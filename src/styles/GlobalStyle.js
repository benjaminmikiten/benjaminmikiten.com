import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const BodyStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.bodyType};
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 1rem;
    line-height: 1.6;
  }

  a{
    &:focus{
      outline: solid 1px ${({ theme }) => theme.colors.focus};
    }
  }

  p {
    ${({ theme }) => theme.type.body};
  }
  p + p {
    padding-top: 1em;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html{
    font-size: 14px;
    @media screen and (min-width: 768px){
      font-size: 16px;
    }
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
`;
