import React from "react";
import { useHistory } from "react-router-dom";
import Section from "../generic/sections/Section";
import Paper from "../generic/layouts/Paper";
import useSession from "../../firebase/auth/generic/useSession";
import Title from "../generic/text/Title";
import ButtonPrimary from "../generic/buttons/ButtonPrimary";
import GridContainer from "../generic/grids/GridContainer";
import GridItem from "../generic/grids/GridItem";
import Container from "../generic/containers/Container";

const Redirect = ({ location = "/" }) => {
  const history = useHistory();
  const { isSignedIn } = useSession();

  return (
    <Section withContainer={false}>
      <Container wide={false}>
        <Paper>
          <GridContainer>
            <GridItem>
              <Title align="center">
                {isSignedIn ? "You are signed in" : "You are not signed in"}
              </Title>
            </GridItem>
            <GridItem>Go home or navigate using the menu.</GridItem>
            <GridItem>
              <ButtonPrimary onClick={() => history.push("/")}>
                Home
              </ButtonPrimary>
            </GridItem>
          </GridContainer>
        </Paper>
      </Container>
    </Section>
  );
};

export default Redirect;
