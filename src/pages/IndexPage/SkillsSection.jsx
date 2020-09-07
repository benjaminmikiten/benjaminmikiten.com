import React from "react";
import { Section } from "../../components/Section";
import { List, ListItem } from "../../components/ExpandableList";
import { ExternalLink } from "../../components/ExternalLink";
import moment from "moment";

const SkillsItems = [
  {
    text: `${moment("April 1, 2013").fromNow(true)} experience web development`,
  },
  {
    text: "bfa communication design @ txst (c/o 2013)",
  },
  {
    text: "tall",
  },
];

export const SkillsSection = () => {
  return (
    <Section>
      <h2>skills</h2>
      <List>
        {SkillsItems.map((item, index) => {
          const { text } = item;
          return <ListItem key={index}>{text}</ListItem>;
        })}
      </List>
    </Section>
  );
};
