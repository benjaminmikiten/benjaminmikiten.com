import React from "react";
import moment from 'moment';
import { Page } from "../../components/Page";
import { getAllArticles } from "../../lib/api";
import { PillList } from "../../components/PillList";
import { CardListing, CardItem } from "../../components/CardListing";
import { sortByFeaturedAndDate } from '../../helpers/sortFunctions';

export const ArticleListing = ({ featured, title, slug, postDate, topics }) => {
  var url = `/articles/${slug}`;
  const description = moment(postDate).format("MMMM DD, YYYY");

  return (
    <CardItem featured={featured} title={title} url={url} description={description}>
      <PillList items={topics} />
    </CardItem>
  );
};


const ArticlesPage = ({ articles, preview }) => {
  return (
    <Page>
      <CardListing>{articles && articles.sort(sortByFeaturedAndDate).map((article, index) => <ArticleListing key={article.slug} {...article} />)}</CardListing>
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
