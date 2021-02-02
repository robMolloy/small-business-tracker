import ProjectMultform from "../custom/multiforms/ProjectMultiform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import Paper from "../generic/layouts/Paper";
import useCustomersOnProjectsContext from "../../contexts/custom/dual-contexts/useCustomersOnProjectsContext";
import CustomersOnProjectsList from "../custom/lists/dual-lists/CustomersOnProjectsList";

const Projects = () => {
  const { items } = useCustomersOnProjectsContext();

  return (
    <>
      <Section>
        <ProjectMultform />
      </Section>

      <Section>
        <GridContainer>
          <CustomersOnProjectsList values={items} Container={Paper} />
        </GridContainer>
      </Section>
    </>
  );
};

export default Projects;
