import React from "react";

import config from "../../../config";
import { Route } from "react-router-dom";
import useSession from "../../../firebase/auth/generic/useSession";
import Redirect from "../../pages/Redirect";

const AllRoutes = (props) => {
  const { isSignedIn } = useSession();

  return (
    <>
      {config.pages.map((pagesData, j) => {
        let routeAvailable = true;
        if (isSignedIn && !pagesData.isSignedIn) routeAvailable = false;
        if (!isSignedIn && !pagesData.isSignedOut) routeAvailable = false;

        return (
          <Route
            key={j}
            exact
            path={`/${pagesData.path}`}
            component={routeAvailable ? pagesData.Component : Redirect}
          />
        );
      })}
    </>
  );
};

export default AllRoutes;
