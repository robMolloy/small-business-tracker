import React from "react";
import Section from "../generic/sections/Section";
import Container from "../generic/containers/Container";
import GridContainer from "../generic/grids/GridContainer";
import GridItem from "../generic/grids/GridItem";
import Paper from "../generic/layouts/Paper";
import Title from "../generic/text/Title";
import Form from "../generic/forms/Form";
import MultiformButtonBar from "../generic/buttons/MultiformButtonBar";
import sendEmailVerificationLink from "../../firebase/auth/generic/sendEmailVerificationLink";

const EmailVerificationPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    sendEmailVerificationLink();
  };

  return (
    <Section withContainer={false}>
      <Container wide={false}>
        <Paper>
          <Form onSubmit={onSubmit}>
            <GridContainer>
              <GridItem>
                <Title align="center" size={2}>
                  Do you want to resend the email verification?
                </Title>
              </GridItem>
              <MultiformButtonBar submitText="Resend" />
            </GridContainer>
          </Form>
        </Paper>
      </Container>
    </Section>
  );
};

export default EmailVerificationPage;
