import React from "react";
import { Section } from "../Section";
import { List, ListItem } from "../ExpandableList";
import { ExternalLink } from "../ExternalLink";

const socialItems = [
  {
    text: "email",
    url: "mailto:benjamin.mikiten+questions@gmail.com",
  },
  {
    text: "github",
    url: "https://github.com/benjaminmikiten",
  },
  {
    text: "keybase",
    url: "https://keybase.io/benjaminmikiten",
  },
  {
    text: "linkedin",
    url: "www.linkedin.com/in/benjamin-mikiten",
  },
];

const SocialSection = () => {
  return (
    <Section>
      <List>
        {socialItems.map((item, index) => {
          const { url, text } = item;
          return (
            <ListItem key={index}>
              <ExternalLink href={url}>{text}</ExternalLink>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

export default SocialSection;
