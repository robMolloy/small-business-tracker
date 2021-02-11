import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";
import useSession from "../../../firebase/auth/generic/useSession";
import HomeAboutTheProduct from "./HomeAboutTheProduct";

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);
  const { isSignedIn } = useSession();

  const classes = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette[color].contrastText,
    },
    column: {
      minHeight: "85vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    innerContainer: { margin: "0 24px" },
    text: {
      fontSize: "3em",
      cursor: "pointer",
      "&:hover": { fontSize: "3.3em" },
    },
  }))();

  return (
    <Section className={classes.root}>
      <span className={classes.column}>
        <span></span>
        <span>
          <Text align="center">Welcome to</Text>
          <Title align="center" size={0} gutterBottom={1}>
            Small Business Tracker
          </Title>
          <Text align="center" gutterBottom={3}>
            {!isSignedIn && "it takes less than 2 minutes to sign up"}
          </Text>
        </span>
        {isSignedIn && (
          <>
            <span>
              <Text align="center" fontWeight="bold" gutterBottom={3}>
                You are logged in, use the menu to get started.
              </Text>
            </span>
            <span></span>
          </>
        )}
        {!isSignedIn && (
          <span>
            <HomeAboutTheProduct />
          </span>
        )}
      </span>
    </Section>
  );
};

export default HomeWelcomeSection;
