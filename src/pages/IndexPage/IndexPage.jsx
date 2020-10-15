import React from "react";
import { Page } from "../../components/Page";
import { ExternalLink } from "../../components/ExternalLink";

import { SocialSection } from "./SocialSection";
import { SkillsSection } from "./SkillsSection";

export const IndexPage = () => {
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
