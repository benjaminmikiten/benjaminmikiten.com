import React from "react";
import styled from "styled-components";
import { Page } from "../../components/Page";
import ResumeData from "../../assets/BenjaminMikiten_2020_resume.json";
import { List, ListItem } from "../../components/ExpandableList";
import { Button, ButtonsGroup } from "../../components/Button";
import { getResume } from "../../lib/api";
import { Blockquote } from "../../components/Blockquote";
import { Markdown } from "../../components/Markdown";

const StyledResumeSection = styled.div`
  padding-bottom: 2rem;
  h2 {
    a {
      ${({ theme }) => theme.type.link}
    }
  }
  h3 {
    color: ${({ theme }) => theme.colors.yellow};
  }
  ul {
    @media (min-width: 768px) {
      columns: 2;
    }
  }
`;

const ExperienceItem = ({ company, tenure, responsibilities }) => {
  return (
    <div>
      <h3>
        <span>{company}</span>, {tenure}
      </h3>
      <List>
        {responsibilities.map((item, index) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </div>
  );
};

const SkillsItem = ({ title, details }) => {
  return (
    <StyledResumeSection>
      <h3>{title}</h3>
      <List>
        {details.map((item, index) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </StyledResumeSection>
  );
};

const EducationItem = ({ school, gradYear, degree, details }) => {
  return (
    <StyledResumeSection>
      <h3>{`${degree}, ${school} (${gradYear})`}</h3>
      <List>
        {details.map((item, index) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </StyledResumeSection>
  );
};

const ResumePage = (props) => {
  const { goal_md } = props;
  console.log(ResumeData[0].experience);
  return (
    <Page title={"Resume"}>
      <StyledResumeSection>
        <Blockquote>
          <Markdown source={goal_md} />
        </Blockquote>
        <h2>
          Get in touch: <a href="mailto:benjaminmikiten@gmail.com">benjaminmikiten@gmail.com</a>
        </h2>
        <h2>Download a copy of my resume</h2>
        <ButtonsGroup>
          <Button as="a" target="_blank" href={"/BenjaminMikiten_2020_resume.pdf"}>
            PDF
          </Button>
          <Button as="a" target="_blank" href={"/BenjaminMikiten_2020_resume.json"}>
            JSON
          </Button>
        </ButtonsGroup>
      </StyledResumeSection>

      <StyledResumeSection>
        <h2>Experience</h2>
        <div>
          {ResumeData[0].experience.map((item, index) => {
            return <ExperienceItem {...item} key={index} />;
          })}
        </div>
      </StyledResumeSection>

      <StyledResumeSection>
        <h2>Skills</h2>
        <div>
          {ResumeData[0].skillsets.map((item, index) => {
            return <SkillsItem {...item} key={index} />;
          })}
        </div>
      </StyledResumeSection>

      <StyledResumeSection>
        <h2>Education</h2>
        <div>
          {ResumeData[0].education.map((item, index) => {
            return <EducationItem {...item} key={index} />;
          })}
        </div>
      </StyledResumeSection>
    </Page>
  );
};

export default ResumePage;

export async function getStaticProps({ params, preview = false }) {
  const resumeData = await getResume(preview);
  return {
    props: {
      ...resumeData,
    },
  };
}
