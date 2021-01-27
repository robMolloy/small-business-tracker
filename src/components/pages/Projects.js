import React from "react";

import ProjectFormContents from "../custom/form-contents/ProjectFormContents";
import CustomerSelectFormContents from "../custom/form-contents/PrjCusLinkCustomerSelectFormContents";

import MultiForm from "../generic/forms/MultiForm";
import Form from "../generic/forms/Form";
import GridContainer from "../generic/grids/GridContainer";
import Section from "../generic/sections/Section";

import blankItems from "../../data/blankItems";
import GridItem from "../generic/grids/GridItem";
import GridText from "../generic/grids/GridText";
import ButtonPrimary from "../generic/buttons/ButtonPrimary";
import Button from "../generic/buttons/Button";

import createMultiFormHelper from "../../classes/createMultiFormHelper";
import FlexBox from "../generic/flex/FlexBox";

const Projects = (props = {}) => {
  const projectMultiFormControls = {};
  const prjCusLinkMultiFormControls = {};

  const [projectMultiFormValues, setProjectMultiFormValues] = React.useState(
    blankItems.project()
  );
  const [
    prjCusLinkMultiFormValues,
    setPrjCusLinkMultiFormValues,
  ] = React.useState(blankItems.recItem());

  let projectMultiFormHelper = createMultiFormHelper({
    controls: projectMultiFormControls,
    values: projectMultiFormValues,
    setValues: setProjectMultiFormValues,
    newItem: blankItems.project,
  });

  let prjCusLinkMultiFormHelper = createMultiFormHelper({
    controls: prjCusLinkMultiFormControls,
    values: prjCusLinkMultiFormValues,
    setValues: setPrjCusLinkMultiFormValues,
    newItem: blankItems.recItem,
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
      Object.values(prjCusLinks).forEach((pcl) => (pcl.pcl_cus_id = prjId));

      projectMultiFormHelper.reset();
      prjCusLinkMultiFormHelper.reset();
    }
  };

  return (
    <Section>
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
          <GridItem xs={12}>
            <FlexBox justifyContent="space-between">
              <Button
                color="secondary"
                onClick={() => prjCusLinkMultiFormHelper.addItem()}
              >
                +
              </Button>
              <ButtonPrimary type="submit">Submit</ButtonPrimary>
            </FlexBox>
          </GridItem>
        </GridContainer>
      </Form>
    </Section>
  );
};

export default Projects;
