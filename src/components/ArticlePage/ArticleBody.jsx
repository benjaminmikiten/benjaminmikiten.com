import React from "react";
import styled from "styled-components";
import { Markdown } from "../Markdown";

export const StyledArticleBody = styled.div`
  ul,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  h2 {
    ${({ theme }) => theme.type.largeTitle};
    /* color: ${({ theme }) => theme.colors.yellow}; */
    /* &:before {
      display: inline-block;
      content: "## ";
      padding-right: 0.5em;
    } */
  }

  h3 {
    ${({ theme }) => theme.type.mediumTitle};
    color: ${({ theme }) => theme.colors.yellow};
    /* &:before {
      display: inline-block;
      content: "### ";
      padding-right: 0.5em;
    } */
  }

  h4 {
    ${({ theme }) => theme.type.smallTitle};
    /* color: ${({ theme }) => theme.colors.mediumBlue}; */
    /* &:before {
      display: inline-block;
      content: "####";
      padding-right: 0.5em;
    } */
  }

  p {
    ${({ theme }) => theme.type.body};
    & + p {
      padding-top: 1em;
    }
  }
`;

const ArticleBody = ({ body }) => {
  return (
    <StyledArticleBody>
      <Markdown source={body} />
    </StyledArticleBody>
  );
};
export default ArticleBody;
