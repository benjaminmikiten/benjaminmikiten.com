import React from "react";
import styled from "styled-components";
import { Markdown } from "../Markdown";
import Link from "next/link";
import { Blockquote } from "../Blockquote";
import { StyledTable, StyledTableCell, StyledTableRow } from "../Table";
import { PillList } from "../PillList";

const StyledProjectIntroduction = styled.div`
  padding: 1rem 0;
  h2 {
    ${({ theme }) => theme.type.largeTitle}
  }
`;

export const StyledProjectTitle = styled.div`
  padding: 2rem 0;
  h1 {
    ${({ theme }) => theme.type.extraLargeTitle};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  span {
    ${({ theme }) => theme.type.largeTitle};
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;

const StyledProjectHero = styled.div`
  width: 100%;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    padding-bottom: calc((9 / 16) * 100%);
    display: block;
  }
  > div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url("${({ backgroundSrc }) => backgroundSrc}");
    background-size: cover;
    background-position: center center;
  }
`;

const StyledProjectStats = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  table {
    width: 100%;
  }
  a {
    ${({ theme }) => theme.type.link}
  }
`;

const StyledProjectSection = styled.div`
  padding-bottom: 2rem;
`;

const StyledProjectOverview = styled.div`
  padding-bottom: 2rem;
  h3 {
    ${({ theme }) => theme.type.largeTitle}
  }
  > div {
    padding-bottom: 2rem;
  }
`;

// COMPONENTS

const ProjectTitle = ({ name, clientName, year }) => {
  return (
    <StyledProjectTitle>
      <h1>{name}</h1>
      <span>
        for {clientName} ({year})
      </span>
    </StyledProjectTitle>
  );
};

export const ProjectHero = ({ description, file, title }) => {
  console.log("FILE", file);
  return (
    <StyledProjectHero backgroundSrc={file.url}>
      <div></div>
    </StyledProjectHero>
  );
};

const ProjectStats = ({ name, date, myRole, teamRoles, technologies, url }) => {
  return (
    <StyledProjectStats>
      <StyledTable>
        <tbody>
          {/* My Role */}
          <StyledTableRow>
            <StyledTableCell>Role</StyledTableCell>
            <StyledTableCell>
              <PillList items={myRole} />
            </StyledTableCell>
          </StyledTableRow>
          {/* Team */}
          <StyledTableRow>
            <StyledTableCell>Team</StyledTableCell>
            <StyledTableCell>
              <PillList items={teamRoles} />
            </StyledTableCell>
          </StyledTableRow>
          {/* Technologies */}
          <StyledTableRow>
            <StyledTableCell>Tech</StyledTableCell>
            <StyledTableCell>
              <PillList items={technologies} />
            </StyledTableCell>
          </StyledTableRow>
          {/* URL, if there is one */}
          {url && (
            <StyledTableRow>
              <StyledTableCell>URL</StyledTableCell>
              <StyledTableCell>
                <Link href={url}>{url}</Link>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </tbody>
      </StyledTable>
    </StyledProjectStats>
  );
};

const ProjectIntroduction = (props) => {
  const { name, clientName, overviewBody, highlightsBody, challengesBody, overviewImage, date, myRole, technologies, teamRoles, url, projectSections } = props;

  const statsData = {
    name,
    date,
    myRole,
    teamRoles,
    technologies,
    url,
  };

  return (
    <StyledProjectIntroduction>
      {overviewImage && <ProjectHero {...overviewImage} />}
      <ProjectTitle name={name} clientName={clientName} year={date} />
      <ProjectStats {...statsData} />

      <div>
        <h2>Overview</h2>
        <Markdown source={overviewBody} />
      </div>
    </StyledProjectIntroduction>
  );
};

export default ProjectIntroduction;
