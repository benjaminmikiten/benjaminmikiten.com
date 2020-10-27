import React from "react";
import styled from "styled-components";

export const StyledExternalLink = styled.a`
  ${({ theme }) => theme.type.link}
`;

export const ExternalLink = ({ children, ...rest }) => {
  return (
    <StyledExternalLink target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </StyledExternalLink>
  );
};
