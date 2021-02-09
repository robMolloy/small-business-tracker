import React from "react";
import Section from "../generic/sections/Section";
import Container from "../generic/containers/Container";
import GridContainer from "../generic/grids/GridContainer";
import GridItem from "../generic/grids/GridItem";
import Paper from "../generic/layouts/Paper";
import Title from "../generic/text/Title";
import Form from "../generic/forms/Form";
import MultiformButtonBar from "../generic/buttons/MultiformButtonBar";
import ButtonSecondary from "../generic/buttons/ButtonSecondary";
import { useHistory } from "react-router-dom";
import signOut from "../../firebase/auth/generic/signOut";

const SignOutPage = () => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    signOut();
    history.push("/");
  };
  const onCancel = () => history.goBack();
  return (
    <Section withContainer={false}>
      <Container wide={false}>
        <Paper>
          <Form onSubmit={onSubmit}>
            <GridContainer>
              <GridItem>
                <Title align="center" size={2}>
                  Are you sure you want to sign out?
                </Title>
              </GridItem>
              <MultiformButtonBar
                submitText="I'm Sure"
                add={false}
                AddAltComponent={
                  <ButtonSecondary onClick={() => onCancel()}>
                    Back
                  </ButtonSecondary>
                }
              />
            </GridContainer>
          </Form>
        </Paper>
      </Container>
    </Section>
  );
};

export default SignOutPage;
