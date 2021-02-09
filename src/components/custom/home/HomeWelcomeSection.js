import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";
import useSession from "../../../firebase/auth/generic/useSession";

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);
  const { isSignedIn } = useSession();

  const classes = makeStyles((theme) => ({
    root: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      padding: "0",
      color: theme.palette[color].contrastText,
    },
    column: {
      height: "85vh",
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    container: {},
    text: {
      fontSize: "3em",
      cursor: "pointer",
      "&:hover": { fontSize: "3.3em" },
    },
  }))();

  return (
    <Section className={classes.root} color={color}>
      <span className={classes.column}>
        <span></span>
        <span className={classes.container}>
          <Text align="center">Welcome to</Text>
          <Title size={0}>Small Business Tracker</Title>
          <Text align="center">keeping your business running</Text>
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
            <Text align="center" fontWeight="bold" gutterBottom={3}>
              This project is unfinished. A number of features and finishing
              touches, both functional and aesthetic, will be coming very soon.
              Contact me{" "}
              <a
                style={{
                  borderBottom: "1px solid white",
                  textDecoration: "none",
                  color: "#ffffff",
                }}
                target="_blank"
                rel="noreferrer noopener"
                href="https://romolo.co.uk/home/#contactForm"
              >
                here
              </a>{" "}
              to find out more!
            </Text>
            <Text align="center" fontWeight="bold" gutterBottom={3}>
              This project has a real-time database which updates your
              information automatically, You may want to view this project on
              two seperate devices to observe this behaviour.
            </Text>
            <Text align="center" fontWeight="bold">
              This is a React/Javascript project and DOES NOT use redux.
              Firestore is used with an original design pattern to give
              real-time updates. This is achieved using the vanilla React Hook
              stack (Context API, without Redux), which results in a less
              bloated and easier to maintain project.
            </Text>
          </span>
        )}
      </span>
    </Section>
  );
};

export default HomeWelcomeSection;
