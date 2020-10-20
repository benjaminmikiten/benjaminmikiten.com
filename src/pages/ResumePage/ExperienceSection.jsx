import React from "react";
import { Section } from "../../components/Section";
import { Markdown } from "../../components/Markdown";

const ExperienceListMD = `
  * 8yrs senior front-end developer @ mcgarrah jessee
    * clients
      * lyft
      * whataburger
      * shiner beer
      * yeti coolers
      * costa sunglasses
  * bfa communication design txst 2013
`;

export const ExperienceSection = () => {
  return (
    <Section>
      <h2>experience</h2>
      <Markdown source={ExperienceListMD} />
    </Section>
  );
};
