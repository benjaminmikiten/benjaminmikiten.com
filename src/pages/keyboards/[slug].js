import { useRouter } from "next/router";
import styled from "styled-components";
import React from "react";
import ErrorPage from "next/error";
import { Page } from "../../components/Page";
import { getKeyboardBySlug, getAllKeyboardsWithSlug } from "../../lib/api";
import ArticleBody from "../../components/ArticlePage/ArticleBody";
import { Markdown } from "../../components/Markdown";
import { Button } from "../../components/Button";
import { ProjectHero, StyledProjectTitle } from "../../components/ProjectPage/ProjectIntroduction";

const StyledKeyboardPage = styled.div`
  h2 {
    padding-top: 2rem;
    padding-bottom: 0.5em;
    ${({ theme }) => theme.type.largeTitle};
  }
  h1 {
    padding-top: 2rem;
    ${({ theme }) => theme.type.extraLargeTitle};
  }
`;

const StyledFirmwareButton = styled.div`
  width: 100%;
`;

const FirmwareButton = ({ url }) => {
  return (
    <StyledFirmwareButton>
      <Button as={`a`} target="_blank" rel="noreferrer noopener" href={url}>
        Get my Firmware
      </Button>
    </StyledFirmwareButton>
  );
};

// PAGE
export default function KeyboardsPage({ keyboard, preview }) {
  const router = useRouter();

  if (!router.isFallback & !keyboard) {
    return <ErrorPage statusCode={404} />;
  }

  if (!keyboard) return null;
  const { model, mods, description, switches, firmwareUrl, firmwareDescription, media } = keyboard;

  return (
    <Page preview={preview} title={model ? model : "Keyboard"}>
      {router.isFallback ? (
        <h2>Loading...</h2>
      ) : (
        <StyledKeyboardPage>
          {media[0] && <ProjectHero {...media[0].fields} />}

          <StyledProjectTitle>
            <h1>{model}</h1>
            <span>{switches}</span>
          </StyledProjectTitle>
          <FirmwareButton url={firmwareUrl} />
          <br />

          <h2>Description</h2>
          <ArticleBody body={description} />
          <h2>Mods</h2>
          <ArticleBody body={mods} />
          <h2>Firmware</h2>
          <ArticleBody body={firmwareDescription} />
          <br />
          <FirmwareButton url={firmwareUrl} />
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
