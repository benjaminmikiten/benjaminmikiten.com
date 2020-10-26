import React from "react";
import { Page } from "../../components/Page";
import { getAllKeyboards } from "../../lib/api";
import { CardListing, CardItem } from "../../components/CardListing";
import { sortByFeatured } from "../../helpers/sortFunctions";

export const sortByAlpha = (a, b) => {
  if (a.model.toLowerCase() < b.model.toLowerCase()) return 1;
  if (b.model.toLowerCase() < a.model.toLowerCase()) return -1;
}


export const KeyboardListing = ({ featured, slug, model, switches, ...rest }) => {
  const description = `${switches}`;
  const url = `/keyboards/${slug}`;
  return <CardItem featured={featured} title={model} url={url} description={description}></CardItem>;
};

const KeyboardsPage = ({ keyboards, preview }) => {
  return (
    <Page>
      <CardListing>{keyboards && keyboards.sort(sortByAlpha).sort(sortByFeatured).map((keyboard, index) => <KeyboardListing key={index} {...keyboard} />)}</CardListing>
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
