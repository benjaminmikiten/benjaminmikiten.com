import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { motion } from "framer-motion";

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

export const Page = ({ children }) => {
  return (
    <StyledPage>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledPage>
  );
};
