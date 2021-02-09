import React from "react";
import Section from "../generic/sections/Section";
import SignInForm from "../custom/form/SignInForm";
import Container from "../generic/containers/Container";

const SignInPage = () => {
  return (
    <Section withContainer={false}>
      <Container wide={false}>
        <SignInForm />
      </Container>
    </Section>
  );
};

export default SignInPage;
