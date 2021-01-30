import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import Accordion from "./Accordion";
import Text from "../text/Text";

// const useStyles = makeStyles((theme) => ({

const CharacterAccordion = (props = {}) => {
  let children, character, summary, className;
  ({ children, character = "+", summary, className = "" } = props);

  const classes = makeStyles((theme) => ({
    root: {},
    character: { paddingRight: theme.spacing(1) },
  }))();

  return (
    <Accordion
      className={`${className} ${classes.root}`}
      summary={
        <Box display="flex">
          <Box className={classes.character}>
            <Text fontWeight="bold">{character}</Text>
          </Box>
          <Box flexGrow={1} alignContent="center">
            <div>{summary}</div>
          </Box>
        </Box>
      }
    >
      {/* <Accordion className={className} summary> */}
      {children}
    </Accordion>
  );
};

export default CharacterAccordion;
