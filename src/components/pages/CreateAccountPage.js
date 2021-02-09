import React from "react";
import Section from "../generic/sections/Section";
import CreateAccountForm from "../custom/form/CreateAccountForm";
import Container from "../generic/containers/Container";

const CreateAccountPage = () => {
  return (
    <Section withContainer={false}>
      <Container wide={false}>
        <CreateAccountForm />
      </Container>
    </Section>
  );
};

export default CreateAccountPage;
