import React from "react";
import styled from "styled-components";
import { Page } from "../../components/Page";
import Link from "next/link";
import { getAllArticles } from "../../lib/api";
import { PillList } from "../../components/PillList";
import moment from "moment";
import { CardListing, CardItem } from "../../components/CardListing";

export const ArticleListing = ({ featured, title, slug, postDate, topics }) => {
  var url = `/articles/${slug}`;
  const description = moment(postDate).format("MMMM DD, YYYY");

  return (
    <CardItem isFeatured={featured} title={title} url={url} description={description}>
      <PillList items={topics} />
    </CardItem>
  );
};

const sortByPostDate = (a, b) => {
  return moment(b.postDate).valueOf() - moment(a.postDate).valueOf();
};

const ArticlesPage = ({ articles, preview }) => {
  return (
    <Page>
      <CardListing>{articles && articles.sort(sortByPostDate).map((article, index) => <ArticleListing key={article.slug} {...article} />)}</CardListing>
    </Page>
  );
};

export default ArticlesPage;

export async function getStaticProps({ params, preview = false }) {
  const data = await getAllArticles(preview);

  return {
    props: {
      preview,
      articles: data ?? null,
    },
  };
}
