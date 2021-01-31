import React from "react";
import MUIAccordion from "@material-ui/core/Accordion";
import MUIAccordionSummary from "@material-ui/core/AccordionSummary";
import MUIAccordionDetails from "@material-ui/core/AccordionDetails";
import makeStyles from "@material-ui/styles/makeStyles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = (props = {}) => {
  let children, summary, className, paddingX;
  ({ children, summary, className = "", paddingX = 2, ...props } = props);

  const classes = makeStyles((theme) => ({
    root: {},
    summary: {
      paddingLeft: theme.spacing(paddingX),
      paddingRight: theme.spacing(paddingX),
    },
    details: {
      paddingLeft: theme.spacing(paddingX),
      paddingRight: theme.spacing(paddingX),
    },
  }))();

  return (
    <MUIAccordion className={`${className} ${classes.root}`} {...props}>
      <MUIAccordionSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
      >
        {summary}
      </MUIAccordionSummary>
      <MUIAccordionDetails className={classes.details}>
        {children}
      </MUIAccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
