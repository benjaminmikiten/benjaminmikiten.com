import React from "react";
import styled from "styled-components";

export const StyledExternalLink = styled.a`
  ${({ theme }) => theme.type.link}
`;

export const ExternalLink = ({ children, ...rest }) => {
  return <StyledExternalLink {...rest}>{children}</StyledExternalLink>;
};
