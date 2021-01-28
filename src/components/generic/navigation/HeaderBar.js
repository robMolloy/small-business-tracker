import React from "react";

import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import AppBar from "@material-ui/core/AppBar";
// import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Container from "../../generic/containers/Container";
import Section from "../../generic/sections/Section";

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    textAlign: "left",
    backgroundColor: theme.palette.mono.light,
    position: "relative",
  },
  container: {
    padding: `${theme.spacing(2)}px 0`,
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  menuButton: {
    alignSelf: "center",
    border: `solid 2px ${theme.palette.grey.main}`,
    borderRadius: "4px",
    padding: "4px 8px",
  },
}));

const HeaderBar = (props = {}) => {
  let children, toggleDrawer, menuButton;
  ({ children, toggleDrawer, menuButton = true, ...props } = props);

  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Section paddingY={false}>
        {/* <MUIToolbar className={classes.toolbar} variant="dense"> */}
        <Container className={classes.container}>
          {children}

          <div></div>
          {menuButton && (
            <IconButton
              onClick={toggleDrawer}
              className={classes.menuButton}
              aria-label="menu"
              color="primary"
              variant="outlined"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Container>
        {/* </MUIToolbar> */}
      </Section>
    </AppBar>

    // </div>
  );
};

export default HeaderBar;
