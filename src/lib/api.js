import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

function parseProject({ fields }) {
  return {
    name: fields.name || null,
    teamRoles: fields.teamRoles || null,
    myRole: fields.myRole || null,
    technologies: fields.technologies || null,
    slug: fields.slug || null,
    sortDate: fields.sortDate || null,
    overviewImage: fields.overviewImage?.fields || null,
    url: fields.url || null,
    date: fields.date || null,
    clientName: fields.clientName || null,
    overviewBody: fields.overviewBody || null,
    // challengesBody: fields.challengesBody || null,
    // highlightsBody: fields.highlightsBody || null,
    projectSections: fields.projectSections || null,
  };
}

function parseProjectEntries(entries, cb = parseProject) {
  return entries?.items?.map(cb);
}

export async function getAllProjectsWithSlug(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "project",
    select: "fields.slug",
  });
  return parseProjectEntries(entries, (project) => project.fields);
}

export async function getAllProjects(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "project",
  });
  return parseProjectEntries(entries);
}

export async function getProjectBySlug(preview, slug) {
  const entry = await getClient(preview).getEntries({
    content_type: "project",
    limit: 1,
    "fields.slug[in]": slug,
  });
  console.log(entry);
  return parseProjectEntries(entry)[0];
}
