import React from "react";
import styled from "styled-components";

export const Blockquote = styled.blockquote`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-left: solid 1px ${({ theme }) => theme.colors.red};
  padding: 1rem 1rem;
  width: 100%;
  p {
    margin: 0;
  }
`;
