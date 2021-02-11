import React from "react";
import { useHistory } from "react-router-dom";
import Section from "../generic/sections/Section";
import Paper from "../generic/layouts/Paper";
import useSession from "../../firebase/auth/generic/useSession";
import Title from "../generic/text/Title";
import Text from "../generic/text/Text";
import ButtonPrimary from "../generic/buttons/ButtonPrimary";
import GridContainer from "../generic/grids/GridContainer";
import GridItem from "../generic/grids/GridItem";
import Container from "../generic/containers/Container";
import sendEmailVerificationLink from "../../firebase/auth/generic/sendEmailVerificationLink";

const Redirect = ({ location = "/" }) => {
  const history = useHistory();
  const { user, isSignedIn, isVerifiedSignIn,isUnverifiedSignIn } = useSession();

  // const unVerifiedSignIn = isSignedIn && !isVerifiedSignIn;

  const onResend = () => {
    sendEmailVerificationLink(user);
  };

  return (
    <Section withContainer={false}>
      <Container wide={false}>
        <Paper>
          <GridContainer>
            <GridItem>
              <Title align="center">
                {!isSignedIn && "You are not signed in"}
                {isVerifiedSignIn && "You are signed in"}
                {isUnVerifiedSignIn && "You need to verify your email address"}
              </Title>
            </GridItem>
            <GridItem>
              <Text align="center">
                {isVerifiedSignIn || !isSignedIn
                  ? "Go home or navigate using the menu."
                  : "Please check your junk email, and click below to resend the email verification link. Once verified you will need to refresh the page."}
              </Text>
            </GridItem>
            <GridItem>
              {isVerifiedSignIn || !isSignedIn ? (
                <ButtonPrimary onClick={() => history.push("/")}>
                  Home
                </ButtonPrimary>
              ) : (
                <ButtonPrimary onClick={() => onResend()}>Resend</ButtonPrimary>
              )}
            </GridItem>
          </GridContainer>
        </Paper>
      </Container>
    </Section>
  );
};

export default Redirect;
