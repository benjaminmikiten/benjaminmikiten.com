import React from "react";
import { Markdown } from "../Markdown";
import styled from "styled-components";
import { MediaItem } from "../MediaItem";

export const StyledProjectSection = styled.div`
  border-top: solid 1px ${({ theme }) => theme.colors.lightGrey};
  padding: 2rem 0;

  h3 {
    ${({ theme }) => theme.type.mediumTitle}
  }
`;
export const ProjectSection = ({ mediaItems, title, description }) => {
  return (
    <StyledProjectSection>
      <h3>{title}</h3>
      <div>
        <Markdown source={description} />
      </div>
      {mediaItems &&
        mediaItems.length !== 0 &&
        mediaItems.map((item, index) => {
          return <MediaItem {...item} />;
        })}
    </StyledProjectSection>
  );
};
export const ProjectSections = ({ sections }) => {
  return (
    <div>
      {sections.map(({ fields }, index) => (
        <ProjectSection {...fields} />
      ))}
    </div>
  );
};
