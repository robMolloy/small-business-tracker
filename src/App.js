import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";
import theme from "./components/generic/themes/theme";

import HeaderBarContents from "./components/custom/navigation/HeaderBarContents";
import Background from "./components/generic/layouts/Background";

import { ThemeProvider } from "@material-ui/core/styles";
import useAllListeners from "./firebase/firestore/custom/useAllListeners";

const App = () => {
  // const Index = Home;
  const headerColor = "mono";
  useAllListeners();

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Background>
            <NavBars
              headerChildren={<HeaderBarContents color={headerColor} />}
            />

            <main>
              <AllRoutes />
            </main>
          </Background>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
