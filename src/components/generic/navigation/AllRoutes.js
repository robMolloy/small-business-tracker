import React from "react";

import config from "../../../config";
import { Route } from "react-router-dom";
import useSession from "../../../firebase/auth/generic/useSession";
import FallBack from "../../pages/FallBack";

const AllRoutes = (props) => {
  const { isSignedIn, isVerifiedSignIn } = useSession();

  return (
    <>
      {config.pages.map((pagesData, j) => {
        let routeAvailable = true;

        if (isSignedIn && !pagesData.requireSignIn) routeAvailable = false;
        if (!isSignedIn && !pagesData.requireSignOut) routeAvailable = false;

        if (isSignedIn && !isVerifiedSignIn && pagesData.requireVerifiedSignIn)
          routeAvailable = false;

        return (
          <Route
            key={j}
            exact
            path={`/${pagesData.path}`}
            component={routeAvailable ? pagesData.Component : FallBack}
          />
        );
      })}
    </>
  );
};

export default AllRoutes;
