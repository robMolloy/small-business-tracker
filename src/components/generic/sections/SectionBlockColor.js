import React from "react";
import Section from "./Section";

import { makeStyles } from "@material-ui/core/styles";

const SectionBlockColor = (props = {}) => {
  let className, children, bg, color;
  ({ className = "", children, bg, color, ...props } = props);

  const classes = makeStyles((theme) => ({
    root: { padding: theme.spacing(2) },
  }))();

  return (
    <Section
      className={`${className} ${classes.root}`}
      style={{ backgroundColor: bg, color }}
      {...props}
    >
      {children}
    </Section>
  );
};

export default SectionBlockColor;
