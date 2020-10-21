import React from "react";
import styled from "styled-components";
import { Page } from "../../components/Page";
import Link from "next/link";
import { getAllArticles } from "../../lib/api";
import { PillList } from "../../components/PillList";
import moment from "moment";

const StyledProjectListing = styled.div`
  cursor: pointer;
  a {
    ${({ theme }) => theme.type.link};
    ${({ theme }) => theme.type.mediumTitle};
    color: ${({ theme }) => theme.colors.interactive};
  }
  p {
    ${({ theme }) => theme.type.extraSmallTitle};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 400;
    padding-bottom: 0.5rem;
  }
  padding-bottom: 2rem;
`;

const ArticleListing = (props) => {
  const { title, slug, postDate, topics } = props;
  var url = `/articles/${slug}`;

  return (
    <StyledProjectListing>
      <Link passHref href={url}>
        <a>{title} ➜</a>
      </Link>
      <p>{moment(postDate).format("MMMM DD, YYYY")}</p>
      <PillList items={topics} />
    </StyledProjectListing>
  );
};

const sortByPostDate = (a, b) => {
  return moment(b.postDate).valueOf() - moment(a.postDate).valueOf();
};

const ArticlesPage = ({ articles, preview }) => {
  return (
    <Page>
      <div>{articles && articles.sort(sortByPostDate).map((article, index) => <ArticleListing key={article.slug} {...article} />)}</div>
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
