import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import AllContextProviders from "./contexts/custom/single-contexts/AllContextProviders";
import UserContextProvider from "./contexts/custom/auth-contexts/UserContextProvider";
import theme from "./components/generic/themes/theme";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <>
    {/* <React.StrictMode> */}

    <UserContextProvider>
      <AllContextProviders>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AllContextProviders>
    </UserContextProvider>

    {/* </React.StrictMode>, */}
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
