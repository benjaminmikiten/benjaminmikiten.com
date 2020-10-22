import React from "react";
import { Page } from "../components/Page";
import { ExternalLink } from "../components/ExternalLink";

import SkillsSection from "../components/IndexPage/SkillsSection";

const IndexPage = () => {
  return (
    <Page>
      <h3>
        front-end developer <ExternalLink href="mailto:benjaminmikiten@gmail.com">for hire</ExternalLink>
      </h3>
      <SkillsSection />
    </Page>
  );
};

export default IndexPage;
