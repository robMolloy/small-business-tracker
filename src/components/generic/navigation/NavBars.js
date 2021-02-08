import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";

const NavBars = (props = {}) => {
  let headerChildren, drawerOpen, menuButton, color;
  ({
    headerChildren,
    drawerOpen = false,
    menuButton = true,
    color = "mono",
    ...props
  } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <HeaderBar
        style={{ opacity: 0, position: "relative" }}
        {...{ toggleDrawer, menuButton, color }}
      >
        {headerChildren}
      </HeaderBar>

      <HeaderBar {...{ toggleDrawer, menuButton, color }}>
        {headerChildren}
      </HeaderBar>

      <SideBar {...{ state: drawerState, toggleDrawer }} />
    </>
  );
};

export default NavBars;
