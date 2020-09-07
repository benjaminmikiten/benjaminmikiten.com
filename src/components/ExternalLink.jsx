import React from "react";
import styled from "styled-components";

export const StyledExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.interactive};
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.interactiveHover};
    }
  }
`;

export const ExternalLink = ({ children, ...rest }) => {
  return <StyledExternalLink {...rest}>{children}</StyledExternalLink>;
};
