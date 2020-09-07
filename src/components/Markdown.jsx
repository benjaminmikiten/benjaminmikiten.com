import React from "react";

import ReactMarkdown from 'react-markdown';

import { List, ListItem } from "../components/ExpandableList";
import { ExternalLink } from "../components/ExternalLink";
import { Link } from 'react-router-dom'

export const Markdown = ({ ...rest }) => {
  const customRenderers = {
    link: ({ href, ...rest }) => href.startsWith('http') ? <ExternalLink href={href} {...rest} /> : <Link to={href} {...rest} />,
    list: ({ children, ...rest }) => <List fromMarkdown={true} {...rest}>{children}</List>,
    listItem: ({ children, ...rest }) => <ListItem fromMarkdown={true} {...rest}>{children}</ListItem>
  };

  return <ReactMarkdown renderers={customRenderers} {...rest} />
}