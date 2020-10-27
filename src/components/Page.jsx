import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GlobalStyle, BodyStyle } from "../styles/GlobalStyle";

export const StyledPage = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    flex: 0 0 auto;
  }
  footer {
    flex: 0 0 auto;
  }
  main {
    flex: 1 1 100%;
    ${({ theme }) => theme.grid.LayoutContainer}
  }
`;

export const Page = ({ children, title }) => {
  return (
    <StyledPage>
      <GlobalStyle />
      <BodyStyle />
      <Head>
        <title>{title ? `${title} | ` : null} Benjamin Mikiten</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledPage>
  );
};
