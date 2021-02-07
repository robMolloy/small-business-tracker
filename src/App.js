import React from "react";
import "./App.css";

import db from "./alt-config/firebase";

import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";
import theme from "./components/generic/themes/theme";

import HeaderBarContents from "./components/custom/navigation/HeaderBarContents";

import { ThemeProvider } from "@material-ui/core/styles";

import CustomerContext from "./contexts/custom/single-contexts/CustomerContext";

// import requestNotificationPermission from "./components/generic/notifications/requestNotificationPermission";
// import displayNotification from "./components/generic/notifications/displayNotification";

const App = () => {
  const Index = Home;
  const headerColor = "mono";

  // React.useEffect(() => {

  //   db.collection("sbt_customer").onSnapshot((snapshot) => {
  //     let changes = snapshot.docChanges();
  //     changes.forEach((change) => {
  //       if (change.type === "added") console.log("added");
  //       else if (change.type === "modified") console.log("modified");
  //       else if (change.type === "removed") console.log("removed");
  //     });
  //   });
  // });

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            backgroundColor: theme.palette.primary.main,
            minHeight: "100vh",
          }}
        >
          <NavBars
            menuButton={true}
            color={headerColor}
            headerChildren={<HeaderBarContents color={headerColor} />}
          />

          <main>
            <Route exact path="/" component={Index} />
            <AllRoutes />
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
