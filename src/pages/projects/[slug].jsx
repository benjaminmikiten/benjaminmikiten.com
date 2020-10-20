import { useRouter } from "next/router";
import React from "react";
import ErrorPage from "next/error";
import { Page } from "../../components/Page";
import { getProjectBySlug, getAllProjectsWithSlug } from "../../lib/api";

export default function ProjectPage({ project, preview }) {
  const router = useRouter();

  if (!router.isFallback & !project) {
    console.log("404");
    return <ErrorPage statusCode={404} />;
  }

  return <Page preview={preview}>{router.isFallback ? <h2>Loading...</h2> : <h2>{project.name}</h2>}</Page>;
}

export async function getStaticProps({ params, preview = false }) {
  console.log("GET STATIC PROPS", params.slug);
  const data = await getProjectBySlug(preview, params.slug);

  console.log("data", data);
  return {
    props: {
      preview,
      project: data ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths: allProjects?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  };
}
