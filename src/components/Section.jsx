import React from "react";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding-bottom: 2rem;
`;

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};
