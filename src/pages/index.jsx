import React from "react";
import { Page } from "../components/Page";
import styled from "styled-components";
import { ExternalLink } from "../components/ExternalLink";

import { Blockquote } from "../components/Blockquote";
import Link from "next/link";
import { getHomepageData } from "../lib/api";
import { ProjectListing } from "../pages/projects/index";
import { ArticleListing } from "../pages/articles/index";
import { KeyboardListing } from "../pages/keyboards/index";
import { Markdown } from "../components/Markdown";

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
    &:first-of-type {
      padding-bottom: 4rem;
    }

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
  const { featuredArticle, featuredKeyboard, featuredProject, thisWebsite, goal_md } = props;

  return (
    <Page>
      <Introduction>
        <h2>
          Senior Front-end Developer <ExternalLink href="mailto:benjaminmikiten@gmail.com">for hire</ExternalLink>
        </h2>
        <Blockquote>
          <Markdown source={goal_md} />
        </Blockquote>
      </Introduction>

      <HomeNavigation>
        <ul>
          <li>
            <h3>
              Want me on your team? Check out my <Link href={"/resume"}>resume</Link>.
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
          <li>
            <h3>
              Checkout this website's code on <ExternalLink href={thisWebsite.githubUrl}>github</ExternalLink>!
            </h3>
            <ProjectListing {...thisWebsite} />
          </li>
        </ul>
      </HomeNavigation>
    </Page>
  );
};

export default IndexPage;

export async function getStaticProps({ params, preview = false }) {
  const homePageData = await getHomepageData(preview);
  const [featuredProjects, resume, thisWebsite] = homePageData;
  const [project, blogPost, keyboard] = featuredProjects;
  const { goal_md } = resume;

  return {
    props: {
      preview,
      featuredKeyboard: keyboard ?? null,
      featuredProject: project ?? null,
      featuredArticle: blogPost ?? null,
      thisWebsite: thisWebsite ?? null,
      goal_md: goal_md ?? null,
    },
  };
}
