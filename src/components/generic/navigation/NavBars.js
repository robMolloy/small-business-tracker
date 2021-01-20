import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";

const NavBars = (props = {}) => {
  let headerChildren, drawerOpen, menuButton;
  ({ headerChildren, drawerOpen = false, menuButton, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <HeaderBar {...{ toggleDrawer, menuButton }}>{headerChildren}</HeaderBar>

      <SideBar {...{ state: drawerState, toggleDrawer }} />
    </>
  );
};

export default NavBars;
