import React from "react";
import styled from "styled-components";
import { Page } from "../../components/Page";
import Link from "next/link";
import { getAllProjects } from "../../lib/api";
import { PillList } from "../../components/PillList";
import moment from "moment";

const StyledProjectListing = styled.div`
  a {
    ${({ theme }) => theme.type.link};
    ${({ theme }) => theme.type.largeTitle};
    color: ${({ theme }) => theme.colors.interactive};
  }
  p {
    ${({ theme }) => theme.type.mediumTitle};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 400;
    padding-bottom: 0.5rem;
  }
  padding-bottom: 2rem;
`;

const ProjectListing = (props) => {
  const { name, slug, clientName, technologies, date } = props;

  return (
    <StyledProjectListing>
      <Link href={`/projects/${slug}`}>{name}</Link>
      <p>
        {clientName}, {date}
      </p>
      <PillList items={technologies} />
    </StyledProjectListing>
  );
};

const sortBySortDate = (a, b) => {
  return moment(b.sortDate).valueOf() - moment(a.sortDate).valueOf();
};

const ProjectsPage = ({ projects, preview }) => {
  return (
    <Page>
      <div>{projects && projects.sort(sortBySortDate).map((project, index) => <ProjectListing key={project.slug} {...project} />)}</div>
    </Page>
  );
};

export default ProjectsPage;

export async function getStaticProps({ params, preview = false }) {
  const data = await getAllProjects(preview);

  return {
    props: {
      preview,
      projects: data ?? null,
    },
  };
}
