import React from "react";

import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

import { makeStyles } from "@material-ui/core";

const HomeLatestProjectsSection = (props = {}) => {
  let color;
  ({ color = "secondary" } = props);

  const classes = makeStyles((theme) => ({
    a: {
      color: theme.palette[color].contrastText,
      borderBottom: `solid 1px ${theme.palette[color].contrastText}`,
      cursor: "pointer",
    },
  }))();

  return (
    <Section color={color} withContainer>
      <Title underline gutterBottom>
        Latest Projects
      </Title>
      <Text gutterBottom>
        For my latest projects it is best to check my{" "}
        <a
          className={classes.a}
          href="https://github.com/robMolloy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        , but I will try to keep a record of them here. I have some guides and
        tutorials that are also on my{" "}
        <a
          className={classes.a}
          href="https://github.com/robMolloy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </Text>
      <Text>- Guide to deploying a react app</Text>
      <Text>- React multiform tutorial (with validation)</Text>
      <Text>- Self billing react hooks</Text>
    </Section>
  );
};

export default HomeLatestProjectsSection;
