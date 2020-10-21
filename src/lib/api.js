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

// PROJECTS

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
  return parseProjectEntries(entry)[0];
}

// SOCIAL ITEMS

function parseSocialItem({ fields }) {
  return {
    title: fields.title || null,
    slug: fields.slug || null,
    url: fields.url || null,
    icon: fields.icon || null,
  };
}

function parseSocialItemEntries(entries, cb = parseSocialItem) {
  return entries?.items?.map(cb);
}

export async function getAllSocialItemsWithSlug(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "socialItem",
    select: "fields.slug",
  });
  return parseSocialItemEntries(entries, (socialItem) => socialItem.fields);
}

export async function getAllSocialItems(preview) {
  console.log("get client", preview);
  const entries = await getClient(preview).getEntries({
    content_type: "blogPost",
  });
  return parseSocialItemEntries(entries);
}

export async function getSocialItemBySlug(preview, slug) {
  const entry = await getClient(preview).getEntries({
    content_type: "socialItem",
    limit: 1,
    "fields.slug[in]": slug,
  });
  return parseSocialItemEntries(entry)[0];
}

// ARTICLES

function parseArticle({ fields }) {
  return {
    title: fields.title || null,
    slug: fields.slug || null,
    body: fields.body || null,
    postDate: fields.postDate || null,
    topics: fields.topics || null,
  };
}

function parseArticleEntries(entries, cb = parseArticle) {
  return entries?.items?.map(cb);
}

export async function getAllArticlesWithSlug(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "blogPost",
    select: "fields.slug",
  });
  return parseArticleEntries(entries, (blogPost) => blogPost.fields);
}

export async function getAllArticles(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "blogPost",
  });
  return parseArticleEntries(entries);
}

export async function getArticleBySlug(preview, slug) {
  const entry = await getClient(preview).getEntries({
    content_type: "blogPost",
    limit: 1,
    "fields.slug[in]": slug,
  });
  return parseArticleEntries(entry)[0];
}
