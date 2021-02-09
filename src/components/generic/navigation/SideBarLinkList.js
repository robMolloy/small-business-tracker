import React from "react";

import MUIList from "@material-ui/core/List";

import SideBarLink from "./SideBarLink";
import useSession from "../../../firebase/auth/generic/useSession";

const SideBarLinkList = (props = {}) => {
  let array;
  ({ array = [], ...props } = props);

  const { isSignedIn } = useSession();

  return (
    <MUIList>
      {array.map((pageData, j) => {
        let usePage = true;

        if (isSignedIn && !pageData.isSignedIn) usePage = false;
        if (!isSignedIn && !pageData.isSignedOut) usePage = false;

        if (!usePage) return "";

        const { Icon, path, name } = pageData;

        return <SideBarLink key={j} {...{ Icon, path, name }} />;
      })}
    </MUIList>
  );
};

export default SideBarLinkList;
