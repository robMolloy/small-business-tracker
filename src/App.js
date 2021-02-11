import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";

import HeaderBarContents from "./components/custom/navigation/HeaderBarContents";

import { makeStyles } from "@material-ui/core/styles";
import useAllListeners from "./firebase/firestore/custom/useAllListeners";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  },
  main: {
    // backgroundColor: theme.palette.primary.main,
    // height: "100%",
  },
}));

const App = () => {
  // const Index = Home;
  const headerColor = "mono";
  useAllListeners();

  const classes = useStyles();

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <div className={`App ${classes.app}`}>
        <NavBars headerChildren={<HeaderBarContents color={headerColor} />} />

        <main className={classes.main}>
          <AllRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
