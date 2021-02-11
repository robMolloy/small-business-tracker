import React from "react";

import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";

import Container from "../../generic/containers/Container";
import Section from "../../generic/sections/Section";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import HeaderBarLinkList from "./HeaderBarLinkList";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    textAlign: "left",
    backgroundColor: theme.palette.mono.light,
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

const HideOnScroll = (props) => {
  const { children, hide } = props;

  const ifHide = useScrollTrigger();
  const trigger = hide ? ifHide : true;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const HeaderBar = (props = {}) => {
  let children, toggleDrawer, menuButton, color, hide;
  ({
    children,
    toggleDrawer,
    menuButton = true,
    color,
    hide = true,
    ...props
  } = props);

  const classes = useStyles();

  return (
    <HideOnScroll hide={hide}>
      <AppBar className={classes.appbar} {...props}>
        <Section color={color} paddingY={false}>
          <Container className={classes.container}>
            {children}

            <Hidden smDown>
              <HeaderBarLinkList />
            </Hidden>

            {menuButton && (
              <Hidden mdUp>
                <IconButton
                  onClick={toggleDrawer}
                  className={classes.menuButton}
                  aria-label="menu"
                  color="primary"
                  variant="outlined"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            )}
          </Container>
        </Section>
      </AppBar>
    </HideOnScroll>
  );
};

export default HeaderBar;
