import React from "react";
import { StyledProjectTitle, StyledProjectDescription } from "./ProjectPageStyles.js";

import { ProjectPage, ProjectOverview } from "./ProjectPage";

const ProjectData = {
  name: "The Frost Loft",
  client: "Frost Bank",
  date: "2019",
  technologies: ["React", "React Spring", "SCSS", "a11y"],
  overviewBody: "When Frost Bank built their new tower in downtown San Antonio, they wanted to open a museum to their history in the lobby. This museum would include a number of interactive experiences including a robotic check-signing robot, a swipable 3D ledger book, a history quiz, a totally separate accessible tablet experience, and more.\nTo bring these ideas to life, we created a richly-animated web experience that ran across several devices including a tablet, a Microsoft Surface, and several gigantic touch screens.",
  challengesBody: "As we were really creating a _physical_ experience, as these experiences would only run on the screens in the exhibit, we had several constraints we don't typically face as developers. I created a  system of interactive elements that had to scale across the different DPIs of the various devices where they were used, _as well_ as having to be conscious of their physical placement in the exhibits to align with ADA requirements for wheelchair-riding visitors.",
};

export const FrostLoftPage = () => {
  return (
    <ProjectPage>
      <StyledProjectTitle>Frost Loft</StyledProjectTitle>
      <StyledProjectDescription></StyledProjectDescription>
      <ProjectOverview />
    </ProjectPage>
  );
};
