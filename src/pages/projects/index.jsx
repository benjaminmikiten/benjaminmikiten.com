import React from "react";
import { Page } from "../../components/Page";
import { useContentfulClient } from "../../hooks/useContentfulClient";
import Link from "next/link";

const ProjectListing = (props) => {
  const { name, slug, overviewImage } = props;

  return (
    <div>
      <Link to={`/projects/${slug}`}>{name}</Link>
    </div>
  );
};

const ProjectsList = () => {
  const projects = useContentfulClient("project");

  return <div>{projects && projects.items.map((project, index) => <ProjectListing key={index} {...project.fields} />)}</div>;
};
const ProjectsPage = () => {
  return (
    <Page>
      <h3>PROJECTS</h3>
      <ProjectsList />
    </Page>
  );
};

export default ProjectsPage;
