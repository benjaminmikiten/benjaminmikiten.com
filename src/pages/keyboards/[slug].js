import { useRouter } from "next/router";
import styled from "styled-components";
import React from "react";
import ErrorPage from "next/error";
import { Page } from "../../components/Page";
import { getKeyboardBySlug, getAllKeyboardsWithSlug } from "../../lib/api";
import ArticleBody from "../../components/ArticlePage/ArticleBody";

const StyledKeyboardPage = styled.div`
  h2 {
    padding-top: 2rem;
    ${({ theme }) => theme.type.largeTitle};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

// PAGE
export default function KeyboardsPage({ keyboard, preview }) {
  const router = useRouter();

  if (!router.isFallback & !keyboard) {
    return <ErrorPage statusCode={404} />;
  }

  if (!keyboard) return null;
  const { model, mods, description, firmwareDescription } = keyboard;

  return (
    <Page preview={preview}>
      {router.isFallback ? (
        <h2>Loading...</h2>
      ) : (
        <StyledKeyboardPage>
          <h1>{model}</h1>

          <h2>Description</h2>
          <ArticleBody body={description} />
          <h2>Mods</h2>
          <ArticleBody body={mods} />
          <h2>Firmware</h2>
          <ArticleBody body={firmwareDescription} />
        </StyledKeyboardPage>
      )}
    </Page>
  );
}

// NEXT JS RENDERING

export async function getStaticProps({ params, preview = false }) {
  const data = await getKeyboardBySlug(preview, params.slug);
  return {
    props: {
      preview,
      keyboard: data ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allKeyboards = await getAllKeyboardsWithSlug();
  return {
    paths: allKeyboards?.map(({ slug }) => `/keyboards/${slug}`) ?? [],
    fallback: false,
  };
}
