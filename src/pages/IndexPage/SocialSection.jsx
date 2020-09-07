import React from "react";
import { Section } from "../../components/Section";
import { List, ListItem } from "../../components/ExpandableList";
import { ExternalLink } from "../../components/ExternalLink";

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
];

export const SocialSection = () => {
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
