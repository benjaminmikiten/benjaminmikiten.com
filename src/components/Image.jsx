import React from "react";

import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
`;

export const Image = ({ file, title }) => {
  return <StyledImage src={file.url} alt={title} />;
};
