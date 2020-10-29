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

// HOMEPAGE

const contentTypes = ["project", "blogPost", "keyboard"];

function parseFeaturedEntires(entries) {
  const parsedEntries = entries.map((entry, index) => {
    return entry ?? null;
  });
  return parsedEntries;
}

export async function getFeaturedEntries(preview) {
  const getFeaturedContentType = async (contentType) => {
    return getClient(preview)
      .getEntries({
        content_type: contentType,
        limit: 1,
        "fields.featured[in]": true,
      })
      .then((data) => {
        const fields = { ...{ ...data.items[0] }.fields };
        return {
          ...fields,
        };
      });
  };
  const getFeaturedContentTypes = async () => {
    return Promise.all(
      contentTypes.map((contentType) => {
        return getFeaturedContentType(contentType);
      })
    );
  };

  return getFeaturedContentTypes()
    .then((data) => {
      return parseFeaturedEntires(data);
    })
    .then((parsedData) => {
      return parsedData;
    });
}

export async function getHomepageData(preview) {
  const getHomepageContent = async () => {
    return Promise.all([getFeaturedEntries(preview), getResume(preview)]);
  };

  return getHomepageContent();
}
// RESUME

function parseResume({ fields }) {
  return {
    goal_md: fields.goal_md || null,
  };
}

export async function getResume(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "resume",
  });
  return entries?.items?.map(parseResume)[0];
}

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
    projectSections: fields.projectSections || null,
    featured: fields.featured || false,
    githubUrl: fields.githubUrl || null,
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
  const entries = await getClient(preview).getEntries({
    content_type: "socialItem",
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

// KEYBOARDS

function parseKeyboard({ fields }) {
  return {
    model: fields.model || null,
    slug: fields.slug || null,
    switches: fields.switches || null,
    description: fields.description || null,
    mods: fields.mods || null,
    media: fields.media || null,
    firmwareDescription: fields.firmwareDescription || null,
    firmwareUrl: fields.firmwareUrl || null,
    featured: fields.featured || false,
  };
}

function parseKeyboardEntries(entries, cb = parseKeyboard) {
  return entries?.items?.map(cb);
}

export async function getAllKeyboardsWithSlug(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "keyboard",
    select: "fields.slug",
  });
  return parseKeyboardEntries(entries, (keyboard) => keyboard.fields);
}

export async function getAllKeyboards(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: "keyboard",
  });
  return parseKeyboardEntries(entries);
}

export async function getKeyboardBySlug(preview, slug) {
  const entry = await getClient(preview).getEntries({
    content_type: "keyboard",
    limit: 1,
    "fields.slug[in]": slug,
  });
  return parseKeyboardEntries(entry)[0];
}

// ARTICLES

function parseArticle({ fields }) {
  return {
    title: fields.title || null,
    slug: fields.slug || null,
    body: fields.body || null,
    postDate: fields.postDate || null,
    topics: fields.topics || null,
    featured: fields.featured || false,
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
