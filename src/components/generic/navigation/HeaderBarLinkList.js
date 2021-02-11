import React from "react";
import Link from "./HeaderBarLink";
import useSession from "../../../firebase/auth/generic/useSession";
import { makeStyles } from "@material-ui/core";
import config from "../../../config";

const HeaderBarLinkList = () => {
  const classes = makeStyles((theme) => ({
    list: { display: "flex", alignItems: "center" },
  }))();

  const { isSignedIn, isVerifiedSignIn } = useSession();

  return (
    <span className={classes.list}>
      {config.pages.map((pagesData, j) => {
        let usePage = true;

        if (isSignedIn && !pagesData.requireSignIn) usePage = false;
        if (!isSignedIn && !pagesData.requireSignOut) usePage = false;

        if (isSignedIn && !isVerifiedSignIn && pagesData.requireVerifiedSignIn)
          usePage = false;

        if (!usePage) return "";

        return (
          <Link key={j} to={pagesData.path}>
            {pagesData.name}
          </Link>
        );
      })}
    </span>
  );
};

export default HeaderBarLinkList;
