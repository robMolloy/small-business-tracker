import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";
import theme from "./components/generic/themes/theme";

import HeaderBarContents from "./components/custom/navigation/HeaderBarContents";

import { ThemeProvider } from "@material-ui/core/styles";

// import requestNotificationPermission from "./components/generic/notifications/requestNotificationPermission";
// import displayNotification from "./components/generic/notifications/displayNotification";

const App = () => {
  const Index = Home;

  const headerColor = "mono";

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBars
            menuButton={false}
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
