import React from "react";
import MUIAccordion from "@material-ui/core/Accordion";
import MUIAccordionSummary from "@material-ui/core/AccordionSummary";
import MUIAccordionDetails from "@material-ui/core/AccordionDetails";
// import Title from "../text/Title";
// import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme) => ({

const Accordion = (props = {}) => {
  let children, summary, className;
  ({ children, summary, className = "" } = props);

  const classes = makeStyles((theme) => ({
    root: {},
  }))();

  return (
    <MUIAccordion className={`${className} ${classes.root}`}>
      <MUIAccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </MUIAccordionSummary>
      <MUIAccordionDetails>{children}</MUIAccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
