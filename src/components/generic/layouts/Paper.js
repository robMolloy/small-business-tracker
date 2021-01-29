import React from "react";
import MUIPaper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
}));

const Paper = (props) => {
  let children;
  ({ children } = props);

  const classes = useStyles();
  return <MUIPaper className={classes.root}>{children}</MUIPaper>;
};

export default Paper;
