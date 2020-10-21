import React from "react";
import styled from "styled-components";
import { PillList } from "../PillList";
import moment from "moment";
export const StyledArticleHeader = styled.div`
  padding-bottom: 2rem;
  h2 {
    ${({ theme }) => theme.type.extraLargeTitle};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  p {
    ${({ theme }) => theme.type.extraSmallTitle};
    color: ${({ theme }) => theme.colors.lightGrey};
    padding-bottom: 1rem;
  }
`;

const ArticleHeader = ({ title, postDate, topics }) => {
  return (
    <StyledArticleHeader>
      <h2>{title}</h2>
      <p>Posted {moment(postDate).format("MMMM DD, YYYY")}</p>
      <PillList items={topics} />
    </StyledArticleHeader>
  );
};
export default ArticleHeader;
