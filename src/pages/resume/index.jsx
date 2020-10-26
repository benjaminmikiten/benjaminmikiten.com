import React from "react";
import { Page } from "../../components/Page";
import {Blockquote} from '../../components/Blockquote';
import {List} from '../../components/ExpandableList'
import {Markdown} from '../../components/Markdown';

const ExperienceMD =
`* 8 years Experience in Front End Development
* Lead front end engineering decisions, collaborating with design teams and project management.
* Scoped and estimated projects.
* Maintaned and managed code bases for long-term projects.
* Communicated with clients and
`;
const SkillsMD = `

`;

const ResumePage = () => {
  return (
  <Page>
    <Blockquote>
          <p>I'm a Front End Developer with 8 years experience and a degree in Graphic Design. I like solving problems, and building beautiful design system with well-writen code. My design background helps me bridge the gap between design and development in both engineering and communication.</p>
        </Blockquote>

        <h3>Experience</h3>
          <Markdown source={ExperienceMD} />

        <h3>Skills</h3>
          <Markdown source={SkillsMD} />

  </Page>);
};

export default ResumePage;
