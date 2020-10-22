import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SocialItems from "../data/socialItems.json";
import { StyledNavItem, StyledNavigation } from "./Navigation";
import { ExternalLink } from "./ExternalLink";

export const StyledFooter = styled.footer`
  ${({ theme }) => theme.grid.LayoutContainer};
  padding-top: 2rem;
  padding-bottom: 2rem;
  > div {
    padding: 0.5rem 0;
    border-top: solid 1px ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledNavItem>Benjamin Mikiten</StyledNavItem>
        <StyledNavigation as={"div"}>
          <div>
            {SocialItems.map(({ title, url, slug }, index) => {
              return (
                <StyledNavItem key={slug}>
                  <ExternalLink href={url}>{title.toLowerCase()}</ExternalLink>
                </StyledNavItem>
              );
            })}
          </div>
        </StyledNavigation>
      </div>
    </StyledFooter>
  );
};

export default Footer;
