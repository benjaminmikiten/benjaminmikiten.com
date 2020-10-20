import React from "react";
import styled from "styled-components";

const StyledPillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    display: inline-block;
    background: ${({ theme }) => theme.colors.darkGrey};
    padding: 0 0.5em;
    border-radius: 0.25em;
    white-space: nowrap;
    margin: 0.25em;
  }
`;

export const PillList = ({ items }) => {
  return (
    <StyledPillList>
      {items.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </StyledPillList>
  );
};
