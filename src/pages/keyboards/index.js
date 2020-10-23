import React from "react";
import { Page } from "../../components/Page";
import { getAllKeyboards } from "../../lib/api";
import moment from "moment";
import { CardListing, CardItem } from "../../components/CardListing";

const sortBySortDate = (a, b) => {
  return moment(b.sortDate).valueOf() - moment(a.sortDate).valueOf();
};

export const KeyboardListing = ({ featured, slug, model, switches, ...rest }) => {
  const description = `${switches}`;
  const url = `/keyboards/${slug}`;
  return <CardItem isFeatured={featured} title={model} url={url} description={description}></CardItem>;
};

const KeyboardsPage = ({ keyboards, preview }) => {
  return (
    <Page>
      <CardListing>{keyboards && keyboards.sort(sortBySortDate).map((keyboard, index) => <KeyboardListing key={index} {...keyboard} />)}</CardListing>
    </Page>
  );
};

export default KeyboardsPage;

export async function getStaticProps({ params, preview = false }) {
  const data = await getAllKeyboards(preview);

  return {
    props: {
      preview,
      keyboards: data ?? [],
    },
  };
}
