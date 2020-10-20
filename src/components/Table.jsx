import React from "react";
import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: dotted 1px ${({ theme }) => theme.colors.lightGrey};
`;
export const StyledTableCell = styled.td`
  border: dotted 1px ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5em;
`;
export const StyledTableRow = styled.tr`
  border-bottom: dotted 1px ${({ theme }) => theme.colors.lightGrey};
`;

export const Table = ({ data, useHeader = false }) => {
  return <table></table>;
};
