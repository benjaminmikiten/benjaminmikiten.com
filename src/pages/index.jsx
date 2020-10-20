import React from "react";
import { Page } from "../components/Page";
import { ExternalLink } from "../components/ExternalLink";

import SocialSection from "./IndexPage/SocialSection";
import SkillsSection from "./IndexPage/SkillsSection";

const IndexPage = () => {
  return (
    <Page>
      <h3>
        front-end developer <ExternalLink href="mailto:benjaminmikiten@gmail.com">for hire</ExternalLink>
      </h3>
      <SocialSection />
      <SkillsSection />
    </Page>
  );
};

export default IndexPage;
