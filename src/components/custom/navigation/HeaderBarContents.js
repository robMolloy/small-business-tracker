import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

import Title from "../../generic/text/Title";

import { Link } from "react-router-dom";
import useSession from "../../../firebase/auth/generic/useSession";

const HeaderBarContents = (props = {}) => {
  let color;
  ({ color = "mono", ...props } = props);

  const history = useHistory();
  const { isSignedIn } = useSession();

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
    spacer: { flexGrow: 1 },
    links: { display: "flex" },
    link: {
      marginRight: theme.spacing(3),
      textDecoration: "none",
      color: "black",
      "&:hover": { borderBottom: "1px solid black" },
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
        {!isSignedIn && (
          <div className={classes.links}>
            <Link className={classes.link} to="/">
              Home
            </Link>
            <Link className={classes.link} to="/sign-in">
              Sign In
            </Link>
            <Link className={classes.link} to="/create-account">
              Create Account
            </Link>
          </div>
        )}
      </span>
    </>
  );
};

export default HeaderBarContents;
