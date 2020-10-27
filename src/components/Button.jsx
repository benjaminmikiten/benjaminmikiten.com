import styled from "styled-components";

export const ButtonsGroup = styled.div`
  display: flex;
  & > * {
    &:not(:last-child) {
      margin-right: 1em;
    }
  }
`;

export const Button = styled.button`
  border: solid 2px ${({ theme }) => theme.colors.interactive};
  background: ${({ theme }) => theme.colors.interactive};
  padding: 0.5em 1em;
  &:focus {
    border: solid 2px ${({ theme }) => theme.colors.interactiveHover};
  }
  transition: background 0.3s ease;
  @media (hover: hover) {
    &:hover {
      border: solid 2px ${({ theme }) => theme.colors.interactiveHover};
      background: ${({ theme }) => theme.colors.interactiveHover};
    }
  }
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: none;

  /* ${({ theme }) => theme.type.button}; */
`;
