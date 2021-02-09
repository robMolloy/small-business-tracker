import Home from "./components/pages/Home";

import Customers from "./components/pages/Customers";
import SignInPage from "./components/pages/SignInPage";
import CreateAccountPage from "./components/pages/CreateAccountPage";
import Projects from "./components/pages/Projects";
import Records from "./components/pages/Records";

import HomeIcon from "@material-ui/icons/Home";

const config = {
  project: { acronym: "sbt" },
  display: { maxWidth: "md", smallPanelMaxWidth: "xs" },
  pages: [
    {
      order: "0",
      path: "",
      name: "Home",
      Component: Home,
      Icon: HomeIcon,
      isSignedIn: true,
      isSignedOut: true,
    },
    {
      order: "1",
      path: "sign-in",
      name: "Sign In",
      Component: SignInPage,
      Icon: HomeIcon,
      isSignedIn: false,
      isSignedOut: true,
    },
    {
      order: "1",
      path: "create-account",
      name: "Create Acccount",
      Component: CreateAccountPage,
      Icon: HomeIcon,
      isSignedIn: false,
      isSignedOut: true,
    },
    {
      order: "1",
      path: "customers",
      name: "Customers",
      Component: Customers,
      Icon: HomeIcon,
      isSignedIn: true,
      isSignedOut: false,
    },
    {
      order: "1",
      path: "projects",
      name: "Projects",
      Component: Projects,
      Icon: HomeIcon,
      isSignedIn: true,
      isSignedOut: false,
    },
    {
      order: "1",
      path: "records",
      name: "Records",
      Component: Records,
      Icon: HomeIcon,
      isSignedIn: true,
      isSignedOut: false,
    },
  ],
  theme: { spacing: 8 },
  palettes: [
    {
      primary: "#004267",
      secondary: "#ceebfa",
      tertiary: "#34719a",
      mono: "#f6f6f6",
    },
    {
      primary: "#f67b50",
      secondary: "#fbc490",
      tertiary: "#fbaa60",
      mono: "#535b5f",
    },
  ],
  fields: { variant: "outlined", size: "small", color: "primary" },
  timeUnits: ["second", "minute", "hour", "day", "month"],
  contactTypes: ["phone", "email"],
  contactMethods: {
    phone: ["whatsapp", "sms", "call"],
    email: ["email"],
  },
};

export default config;
