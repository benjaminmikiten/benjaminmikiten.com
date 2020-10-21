import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getAllSocialItems } from "../lib/api";

export const StyledFooter = styled.footer`
  ${({ theme }) => theme.grid.LayoutContainer};
  padding-top: 2rem;
  padding-bottom: 2rem;
  > div {
    padding: 0.5rem 0;
    border-top: solid 1px ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Footer = ({ socialItems }) => {
  return (
    <StyledFooter>
      <div>
        <div>
          {socialItems &&
            socialItems.map(({ title, url, slug }, index) => {
              return (
                <span key={slug}>
                  <Link href={url}>{title}</Link>
                </span>
              );
            })}
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getAllSocialItems(preview);

//   return {
//     props: {
//       preview,
//       socialItems: data ?? null,
//     },
//   };
// }
