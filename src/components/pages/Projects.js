import ProjectMultform from "../custom/multiforms/ProjectMultiform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import ProjectList from "../custom/lists/ProjectList";

import ProjectContext from "../../contexts/custom/single-contexts/ProjectContext";
import Paper from "../generic/layouts/Paper";

const Projects = () => {
  const { items } = ProjectContext.useContext();
  return (
    <>
      <ProjectMultform />
      <Section>
        <GridContainer>
          <ProjectList values={items} Container={Paper} />
        </GridContainer>
      </Section>
    </>
  );
};

export default Projects;
