import { useRouter } from "next/router";
import React from "react";
import ErrorPage from "next/error";
import { Page } from "../../components/Page";
import { getArticleBySlug, getAllArticlesWithSlug } from "../../lib/api";
import { Markdown } from "../../components/Markdown";

import ArticleHeader from "../../components/ArticlePage/ArticleHeader";
import ArticleBody from "../../components/ArticlePage/ArticleBody";

// PAGE
export default function ArticlesPage({ article, preview }) {
  const router = useRouter();

  if (!router.isFallback & !article) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page preview={preview} title={aricle ? article.title : "Article"}>
      {router.isFallback ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <ArticleHeader {...article} />
          <ArticleBody body={article.body} />
        </>
      )}
    </Page>
  );
}

// NEXT JS RENDERING

export async function getStaticProps({ params, preview = false }) {
  const data = await getArticleBySlug(preview, params.slug);

  return {
    props: {
      preview,
      article: data ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug();
  return {
    paths: allArticles?.map(({ slug }) => `/articles/${slug}`) ?? [],
    fallback: false,
  };
}
