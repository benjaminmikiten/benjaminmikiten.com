import React from "react";
import { Section } from "../../components/Section";
import moment from "moment";
import { Markdown } from "../../components/Markdown";
const SkillsListMD = `
  * ${moment("April 1, 2013").fromNow(true)} years web development
    * react
    * gatsby, graphQL
    * docker
    * javascript
    * node.js
    * express, mongoDB
    * styled components
    * HTML & CSS/SCSS
    * git, git flow, gitgub
    * photoshop, sketch, figma
  * bfa communication design txst 2013
  * tall
`;

const SkillsSection = () => {
  return (
    <Section>
      <h2>skills</h2>
      <Markdown source={SkillsListMD} />
    </Section>
  );
};

export default SkillsSection;
