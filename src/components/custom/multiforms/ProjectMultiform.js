import React from "react";

import ProjectFormContents from "../form-contents/ProjectFormContents";
import CustomerSelectFormContents from "../form-contents/PrjCusLinkCustomerSelectFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";
import GridContainer from "../../generic/grids/GridContainer";

import blankItems from "../../../data/blankItems";
import GridText from "../../generic/grids/GridText";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";

import ProjectContext from "../../../contexts/custom/single-contexts/ProjectContext";
import PrjCusLinkContext from "../../../contexts/custom/single-contexts/PrjCusLinkContext";
import Accordion from "../../generic/layouts/Accordion";
import MultiformButtonBar from "../../generic/buttons/MultiformButtonBar";

const Projects = (props = {}) => {
  const projectMultiFormControls = {};
  const prjCusLinkMultiFormControls = {};

  const { add: addProjects } = ProjectContext.useContext();
  const { add: addPrjCusLinks } = PrjCusLinkContext.useContext();

  const initProject = () => blankItems.project();
  const initPrjCusLink = () => blankItems.prjCusLink();
  const [projectMultiFormValues, setProjectMultiFormValues] = React.useState(
    initProject()
  );

  const [
    prjCusLinkMultiFormValues,
    setPrjCusLinkMultiFormValues,
  ] = React.useState(initPrjCusLink());

  let projectMultiFormHelper = createMultiFormHelper({
    controls: projectMultiFormControls,
    values: projectMultiFormValues,
    setValues: setProjectMultiFormValues,
    newItem: initProject,
  });

  let prjCusLinkMultiFormHelper = createMultiFormHelper({
    controls: prjCusLinkMultiFormControls,
    values: prjCusLinkMultiFormValues,
    setValues: setPrjCusLinkMultiFormValues,
    newItem: initPrjCusLink,
  });

  let [matches, setMatches] = React.useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!(await projectMultiFormHelper.isValid())) valid = false;
    if (!(await prjCusLinkMultiFormHelper.isValid())) valid = false;

    matches = prjCusLinkMultiFormHelper.matches("pcl_cus_id");
    if (matches.length !== 0) valid = false;
    setMatches(matches);

    if (valid) {
      let projects = projectMultiFormHelper.getItems();
      let prjCusLinks = prjCusLinkMultiFormHelper.getItems();

      let prjId = Object.keys(projects)[0];
      Object.values(prjCusLinks).forEach((pcl) => (pcl.pcl_prj_id = prjId));

      addProjects(projects);
      addPrjCusLinks(prjCusLinks);

      projectMultiFormHelper.reset();
      prjCusLinkMultiFormHelper.reset();
    }
  };

  return (
    <Accordion summary="Add Project">
      <Form onSubmit={onSubmit}>
        <GridContainer alignItems="center">
          <MultiForm
            {...{
              overline: false,
              multiFormControls: projectMultiFormControls,
              multiFormValues: projectMultiFormValues,
              setMultiFormValues: setProjectMultiFormValues,
              Component: ProjectFormContents,
            }}
          />
          {matches.length !== 0 && (
            <GridText error>
              It looks like you've got matching customers, each value should be
              unique
            </GridText>
          )}
          <MultiForm
            {...{
              multiFormControls: prjCusLinkMultiFormControls,
              multiFormValues: prjCusLinkMultiFormValues,
              setMultiFormValues: setPrjCusLinkMultiFormValues,
              Component: CustomerSelectFormContents,
              remove: true,
            }}
          />

          <MultiformButtonBar
            addProps={{ onClick: () => prjCusLinkMultiFormHelper.addItem() }}
          />
        </GridContainer>
      </Form>
    </Accordion>
  );
};

export default Projects;
