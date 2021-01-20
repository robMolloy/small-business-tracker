import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";

import ReactLogo from "../media/ReactLogo";
import Es6Logo from "../media/Es6Logo";
import PhpLogo from "../media/PhpLogo";
import PythonLogo from "../media/PythonLogo";
import SqlLogo from "../media/SqlLogo";
import MongoDBLogo from "../media/MongoDBLogo";

import makeStyles from "@material-ui/styles/makeStyles";

const HomeWhatICanDoSection = (props = {}) => {
  let color;
  ({ color = "tertiary" } = props);

  const classes = makeStyles((theme) => ({
    top: { padding: theme.spacing(1), boxSizing: "border-box" },
    icon: {
      padding: theme.spacing(1),
      height: "75%",
      width: "75%",
      maxHeight: "200px",
      maxWidth: "200px",
    },
  }))();

  return (
    <Section color={color} withContainer>
      <Title underline gutterBottom>
        My skills
      </Title>
      <Text gutterBottom>
        I am familiar with some of the most up to date web technologies, as
        listed below. At this moment in time, I write my new projects in react
        (hooks). For me, it gives the richest and highest-quality
        user-experience, as well as being an intuitive way to create new
        projects. For the back-end, I mainly use PHP, but more recently I've
        found using MongoDB and JavaScript to be the most simple to set up, but
        understand the limitations that come with it in comparison to SQL.
      </Text>
      <Text gutterBottom>
        Due to the numerous advantages, such as offline capabilities and the
        ability to install, to give an app-like experience, I favour PWAs. PWAs
        are incredibly powerful, OS-agnostic, and, with the addition of the
        notification api for Android, the line between native apps and web apps
        is minimal.
      </Text>
      <Text gutterBottom>
        I design for mobile-first and use material design princiciples in order
        to take advantage of the material-ui module.
      </Text>
      <Text gutterBottom>
        Other technologies and APIs that I have used are Twilio, Telegram,
        Firebase, AWS, Gatsby, websockets, oAuth (Google login), indexedDB.
      </Text>
      <GridColumnToRow
        array={[
          <ReactLogo className={classes.icon} />,
          <Es6Logo className={classes.icon} />,
          <PhpLogo className={classes.icon} />,
        ]}
      />
      <GridColumnToRow
        array={[
          <PythonLogo className={classes.icon} />,
          <MongoDBLogo className={classes.icon} />,
          <SqlLogo className={classes.icon} />,
        ]}
      />
    </Section>
  );
};

export default HomeWhatICanDoSection;
