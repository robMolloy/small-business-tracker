import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);

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
    // iconsContainer: { position: "absolute", bottom: 0 },
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
        <span></span>
        <span>
          <Text align="center" fontWeight="bold" gutterBottom={3}>
            This project is made with React/Javascript and DOES NOT use redux. A
            similar result is achieved using the vanilla React Hook stack, which
            results in a less bloated and easier to maintain project.
          </Text>
          <Text align="center" fontWeight="bold" gutterBottom={3}>
            Firestore is used with an original design pattern (without Redux) to
            give real-time updates. You can view this project on two seperate
            devices to observe this behaviour.
          </Text>
          <Text align="center" fontWeight="bold">
            The next version will have auth/user accounts, and will be available
            before the end of February. Whilst there is no auth, please don't
            save any real information of anyone else's, or any information of
            yours that you don't want to be public.
          </Text>
        </span>
      </span>
    </Section>
  );
};

export default HomeWelcomeSection;
