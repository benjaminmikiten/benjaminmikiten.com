import React from "react";

import ReactMarkdown from "react-markdown";

import { List, ListItem } from "../components/ExpandableList";
import { ExternalLink } from "../components/ExternalLink";
import Link from "next/link";

export const Markdown = ({ ...rest }) => {
  const customRenderers = {
    link: ({ href, children, ...rest }) =>
      href.startsWith("http") ? (
        <ExternalLink href={href} {...rest}>
          {children}
        </ExternalLink>
      ) : (
        <Link href={href} {...rest}>
          <>{children}</>
        </Link>
      ),
    list: ({ children, ...rest }) => (
      <List fromMarkdown={true} {...rest}>
        {children}
      </List>
    ),
    listItem: ({ children, ...rest }) => (
      <ListItem fromMarkdown={true} {...rest}>
        {children}
      </ListItem>
    ),
  };

  return <ReactMarkdown renderers={customRenderers} {...rest} />;
};
