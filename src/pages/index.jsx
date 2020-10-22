import React from "react";
import moment from "moment";
import { Page } from "../components/Page";
import styled from "styled-components";
import { ExternalLink } from "../components/ExternalLink";

import { Blockquote } from "../components/Blockquote";
import Link from "next/link";
import { Markdown } from "../components/Markdown";
import { getFeaturedEntries } from "../lib/api";
import { ProjectListing } from "../pages/projects/index";
import { ArticleListing } from "../pages/articles/index";
import { KeyboardListing } from "../pages/keyboards/index";

export const Introduction = styled.div`
  h2 {
    ${({ theme }) => theme.type.largeTitle}
    color: ${({ theme }) => theme.colors.lightGrey};
    padding-bottom: 1rem;
  }
  blockquote p {
    font-size: 1.2rem;
  }
`;

const StatsLists = [
  {
    title: "Skills",
    body: `# asdf
    * react
    * next.js, gatsby
    * api/cms integration
    * animation libs
    * styled components
    * a11y standards
    * node, babel, webpack
    * express, mongoDB
    * docker, nginx, apache
    * git, git flow, gitgub
    * photoshop, sketch, figma
`,
  },
  {
    title: "Experience",
    body: `* ${moment("April 1, 2013").fromNow(true)} years web development
    * bfa communication design txst 2013
  `,
  },
];

const HomeNavigation = styled.div`
  padding-top: 2rem;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  li {
    padding-bottom: 2rem;
    > a {
      padding-top: 1rem;
    }
  }
  h3 {
    ${({ theme }) => theme.type.mediumTitle};
    color: ${({ theme }) => theme.colors.yellow};
    a {
      ${({ theme }) => theme.type.link}
    }
  }
`;

export const StatsGroups = styled.div``;

const IndexPage = (props) => {
  const { featuredArticle, featuredKeyboard, featuredProject } = props;
  return (
    <Page>
      <Introduction>
        <h2>
          front-end developer <ExternalLink href="mailto:benjaminmikiten@gmail.com">for hire</ExternalLink>
        </h2>
        <Blockquote>
          <p>I'm a Front End Developer with 8 years experience and a degree in Graphic Design. I like solving problems, and building beautiful design system with well-writen code. My design background helps me bridge the gap between design and development in both engineering and communication.</p>
        </Blockquote>
      </Introduction>

      <HomeNavigation>
        <ul>
          <li>
            <h3>
              Want me on your team? Check out my <Link href={"/resume"}>resume.</Link>
            </h3>
          </li>
          <li>
            <h3>
              Explore the <Link href={"/projects"}>projects</Link> I'm most proud of.
            </h3>
            <ProjectListing {...featuredProject} />
          </li>
          <li>
            <h3>
              Read <Link href={"/articles"}>something I wrote</Link>.
            </h3>
            <ArticleListing {...featuredArticle} />
          </li>
          <li>
            <h3>
              I collect and build <Link href={"/keyboards"}>keyboards</Link>!
            </h3>
            <KeyboardListing {...featuredKeyboard} />
          </li>
        </ul>
      </HomeNavigation>
    </Page>
  );
};

export default IndexPage;

export async function getStaticProps({ params, preview = false }) {
  const data = await getFeaturedEntries(preview);
  const [project, blogPost, keyboard] = data;
  console.log(data);

  return {
    props: {
      preview,
      featuredKeyboard: keyboard ?? null,
      featuredProject: project ?? null,
      featuredArticle: blogPost ?? null,
    },
  };
}
