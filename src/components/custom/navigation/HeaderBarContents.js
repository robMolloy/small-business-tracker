import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

import Title from "../../generic/text/Title";
import Login from "../../pages/Login";

// const headerHeight

const HeaderBarContents = (props = {}) => {
  let color;
  ({ color = "mono", ...props } = props);

  const history = useHistory();

  const classes = makeStyles((theme) => ({
    logoContainer: {
      maxHeight: "100px",
      maxWidth: "65%",
      color: theme.palette[color].contrastText,
      cursor: "pointer",
    },
    logoSettingsContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding: `${theme.spacing(1)}px 0`,
    },
  }))();
  return (
    <>
      <div className={classes.logoContainer}>
        <Title color="mono" onClick={() => history.push("/")}>
          small-business-tracker
        </Title>
      </div>

      <div className={classes.spacer}></div>

      <span className={classes.logoSettingsContainer}>
        <Login />
      </span>
    </>
  );
};

export default HeaderBarContents;
