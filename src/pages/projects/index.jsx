import React from "react";
import { Page } from "../../components/Page";
import { getAllProjects } from "../../lib/api";
import { PillList } from "../../components/PillList";
import moment from "moment";
import { CardListing, CardItem } from "../../components/CardListing";

const sortBySortDate = (a, b) => {
  return moment(b.sortDate).valueOf() - moment(a.sortDate).valueOf();
};

export const ProjectListing = ({ featured, slug, name, clientName, date, technologies, ...rest }) => {
  const description = `${clientName}, ${date}`;
  const url = `/projects/${slug}`;
  return (
    <CardItem featured={featured} title={name} url={url} description={description}>
      <PillList items={technologies} />
    </CardItem>
  );
};

const ProjectsPage = ({ projects, preview }) => {
  return (
    <Page>
      <CardListing>{projects && projects.sort(sortBySortDate).map((project, index) => <ProjectListing key={index} {...project} />)}</CardListing>
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
