import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";

const NavBars = (props = {}) => {
  let headerChildren, drawerOpen, menuButton, color;
  ({ headerChildren, drawerOpen = false, menuButton, color, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <HeaderBar
        {...{
          style: { position: "relative" },
          toggleDrawer,
          menuButton,
          color,
        }}
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
