import React from "react";
import { StyledPage } from "./PageStyle";
import Header from "../Header";
const Page = ({ children }) => {
  return (
    <StyledPage>
      <Header />
      <main>{children}</main>
    </StyledPage>
  );
};

export default Page;
