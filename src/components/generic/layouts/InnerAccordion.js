import React from "react";
import Accordion from "./Accordion";
import makeStyles from "@material-ui/styles/makeStyles";

const InnerAccordion = (props) => {
  let className;
  ({ className, ...props } = props);

  const classes = makeStyles((theme) => ({
    root: { borderTop: `solid 1px ${theme.palette.grey.main}` },
  }))();

  return (
    <Accordion
      className={`${className} ${classes.root}`}
      paddingX={0}
      elevation={0}
      square
      {...props}
    />
  );
};

export default InnerAccordion;
