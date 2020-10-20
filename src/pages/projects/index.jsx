import React from "react";
import { Page } from "../../components/Page";
import Link from "next/link";
import { getAllProjects } from "../../lib/api";

const ProjectListing = (props) => {
  const { name, slug } = props;

  return (
    <div>
      <Link href={`/projects/${slug}`}>{name}</Link>
    </div>
  );
};

const ProjectsPage = ({ projects, preview }) => {
  return (
    <Page>
      <h3>PROJECTS</h3>
      <div>{projects && projects.map((project, index) => <ProjectListing key={project.slug} {...project} />)}</div>
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
