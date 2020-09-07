import React from "react";
import { Section } from "../../components/Section";
import { List, ListItem } from "../../components/ExpandableList";
import { ExternalLink } from "../../components/ExternalLink";
import moment from "moment";
import ReactMarkdown from 'react-markdown';

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

const Markdown = ({ ...rest }) => {
  const customRenderers = {
    list: ({ children, ...rest }) => <List fromMarkdown={true} {...rest}>{children}</List>,
    listItem: ({ children, ...rest }) => <ListItem fromMarkdown={true} {...rest}>{children}</ListItem>
  };

  return <ReactMarkdown renderers={customRenderers} {...rest} />
}

export const SkillsSection = () => {
  return (
    <Section>
      <h2>skills</h2>
      <Markdown source={SkillsListMD} />
    </Section>
  );
};
