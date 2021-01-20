import React from "react";
import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Icon from "../media/Icon";
import { makeStyles } from "@material-ui/core";

const HomeIntroSection = (props = {}) => {
  let color;
  ({ color = "mono" } = props);

  const classes = makeStyles(() => ({
    imgContainer: {
      height: "200px",
    },
  }))();

  return (
    <Section color={color} withContainer>
      <GridColumnToRow
        alignItems="center"
        wrap="wrap-reverse"
        array={[
          <>
            <Text gutterBottom>
              I am a full-stack developer, with experience in a number of
              technologies.
            </Text>
            <Text gutterBottom>
              I make beautiful websites that are tailor-made to give the
              end-client the best possible user-exprience.
            </Text>
            <Text>
              As I make all my projects from scratch, they are customisable down
              to the last detail and for full convenience each project has tools
              for you to change many parts of the project yourself.
            </Text>
          </>,
          <div className={classes.imgContainer}>
            <Icon />
          </div>,
        ]}
      />
    </Section>
  );
};

export default HomeIntroSection;
