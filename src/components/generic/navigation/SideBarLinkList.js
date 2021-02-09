import React from "react";

import MUIList from "@material-ui/core/List";

import SideBarLink from "./SideBarLink";
import useSession from "../../../firebase/auth/generic/useSession";

const SideBarLinkList = (props = {}) => {
  let array;
  ({ array = [], ...props } = props);

  const { isSignedIn, isVerifiedSignIn } = useSession();

  return (
    <MUIList>
      {array.map((pagesData, j) => {
        let usePage = true;

        if (isSignedIn && !pagesData.requireSignIn) usePage = false;
        if (!isSignedIn && !pagesData.requireSignOut) usePage = false;

        if (isSignedIn && !isVerifiedSignIn && pagesData.requireVerifiedSignIn)
          usePage = false;

        // if (isSignedIn && !pageData.requireSignIn) usePage = false;
        // if (!isSignedIn && !pageData.requireSignOut) usePage = false;

        if (!usePage) return "";

        const { Icon, path, name } = pagesData;

        return <SideBarLink key={j} {...{ Icon, path, name }} />;
      })}
    </MUIList>
  );
};

export default SideBarLinkList;
