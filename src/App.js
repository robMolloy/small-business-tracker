import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";
import theme from "./components/generic/themes/theme";

import HeaderBarContents from "./components/custom/navigation/HeaderBarContents";

import { ThemeProvider } from "@material-ui/core/styles";

// import CustomerContext from "./contexts/custom/single-contexts/CustomerContext";
// import useCustomer from "./firestore/custom/useCustomer";
import useCustomerListener from "./firestore/custom/useCustomerListener";
import useContactListener from "./firestore/custom/useContactListener";
import usePrjCusLinkListener from "./firestore/custom/usePrjCusLinkListener";
import useProjectListener from "./firestore/custom/useProjectListener";
import useRecItemListener from "./firestore/custom/useRecItemListener";
import useRecordListener from "./firestore/custom/useRecordListener";
// import requestNotificationPermission from "./components/generic/notifications/requestNotificationPermission";
// import displayNotification from "./components/generic/notifications/displayNotification";

const App = () => {
  const Index = Home;
  const headerColor = "mono";

  useCustomerListener();
  useContactListener();
  usePrjCusLinkListener();
  useProjectListener();
  useRecItemListener();
  useRecordListener();

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
