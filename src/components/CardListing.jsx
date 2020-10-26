import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledCard = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  &:not(:last-of-type) {
    padding-bottom: 1rem;
  }

  > div {
    transition: all 0.3s ease;
    border: solid 1px ${({ theme }) => theme.colors.lightGrey};
    padding: 1rem;

    > h3 {
      ${({ theme }) => theme.type.mediumTitle}
    }
    > p {
      ${({ theme }) => theme.type.extraSmallTitle};
      color: ${({ theme }) => theme.colors.lightGrey};
      font-weight: 400;
      padding-bottom: 0.5rem;
    }
  }
  @media (hover: hover) {
    &:hover {
      > div {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  ${({ featured, theme }) => {
    if (featured) {
      return css`
        > div {
          border-left: solid 1rem ${theme.colors.yellow};
        }
      `;
    }
  }}
`;

export const CardItem = ({ title, url, description, children, featured = false }) => {
  return (
    <Link passHref href={url}>
      <StyledCard featured={featured}>
        <div>
          <h3>{title} ➜</h3>
          <p>{description}</p>
          {children && <div>{children}</div>}
        </div>
      </StyledCard>
    </Link>
  );
};

export const CardListing = styled.div``;
