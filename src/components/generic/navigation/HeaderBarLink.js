import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const HeaderBarLink = (props) => {
  const classes = makeStyles((theme) => ({
    link: {
      marginRight: theme.spacing(3),
      textDecoration: "none",
      color: "black",
      padding: `${theme.spacing(1)}px 0`,
      borderBottom: "1px solid #00000000",
      "&:hover": { borderBottom: "1px solid black" },
    },
  }))();

  return <Link className={classes.link} {...props} />;
};

export default HeaderBarLink;
