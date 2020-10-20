import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export const StyledNavigation = styled.nav`
  width: 100%;
  padding: 0.5em 0;
  > div {
    margin: -0.5rem;
    width: calc(100% + 1rem);
    display: inline-flex;
    justify-content: flex-start;
  }
`;
export const StyledNavItem = styled.div`
  width: auto;
  padding: 0.5rem;
  flex: 0 0 auto;
  a {
    padding: 0.1em 0.25em;
    ${({ theme }) => theme.type.link}

    ${({ isActive, theme }) => {
      switch (isActive) {
        case true:
          return css`
            font-weight: 700;
            color: ${theme.colors.primary};
            background-color: ${theme.colors.yellow};
            @media (hover: hover) {
              &:hover {
                background-color: ${theme.colors.brightBlue};
                color: ${theme.colors.primary};
              }
            }
          `;
        case false:
        default:
          return css``;
      }
    }}
  }
`;

const NavItemsData = [
  {
    url: "/projects",
    title: "projects",
  },
  {
    url: "/resume",
    title: "resume",
  },
  {
    url: "/articles",
    title: "articles",
  },
];

export const Navigation = () => {
  const { pathname } = useRouter();
  console.log("path", pathname);
  return (
    <StyledNavigation>
      <div>
        {NavItemsData.map(({ url, title }, index) => {
          const isActive = pathname.includes(url);
          return (
            <StyledNavItem key={index} isActive={isActive}>
              <Link href={url}>{title}</Link>
            </StyledNavItem>
          );
        })}
      </div>
    </StyledNavigation>
  );
};
