import Home from "./components/pages/Home";

import Customers from "./components/pages/Customers";
import Projects from "./components/pages/Projects";

import ContactFormContents from "./components/custom/form-contents/ContactFormContents";
import PrjCusLinkFormContents from "./components/custom/form-contents/PrjCusLinkFormContents";
import ProjectFormContents from "./components/custom/form-contents/ProjectFormContents";
import RecItemFormContents from "./components/custom/form-contents/RecItemFormContents";
import RecordFormContents from "./components/custom/form-contents/RecordFormContents";

import HomeIcon from "@material-ui/icons/Home";

const config = {
  pages: [
    {
      order: "0",
      path: "home",
      name: "Home",
      Component: Home,
      Icon: HomeIcon,
    },
    {
      order: "1",
      path: "customers",
      name: "Customers",
      Component: Customers,
      Icon: HomeIcon,
    },
    {
      order: "1",
      path: "projects",
      name: "Projects",
      Component: Projects,
      Icon: HomeIcon,
    },
    {
      order: "2",
      path: "contactFormContents",
      name: "ContactsFormContents",
      Component: ContactFormContents,
      Icon: HomeIcon,
    },
    {
      order: "2",
      path: "PrjCusLinkFormContents",
      name: "PrjCusLinkFormContents",
      Component: PrjCusLinkFormContents,
      Icon: HomeIcon,
    },
    {
      order: "2",
      path: "ProjectFormContents",
      name: "ProjectFormContents",
      Component: ProjectFormContents,
      Icon: HomeIcon,
    },
    {
      order: "2",
      path: "RecItemFormContents",
      name: "RecItemFormContents",
      Component: RecItemFormContents,
      Icon: HomeIcon,
    },
    {
      order: "2",
      path: "RecordFormContents",
      name: "RecordFormContents",
      Component: RecordFormContents,
      Icon: HomeIcon,
    },
  ],
  themes: [
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
  timeUnits: ["second", "minute", "hour", "day", "month"],
  contactTypes: ["phone", "email"],
  contactMethods: {
    phone: ["whatsapp", "sms", "call"],
    email: ["email"],
  },
};

export default config;

/*

primary: { main: "#FBAA60" },
    secondary: { main: "#535b5f" },
  },
});

const { primary: tertiary, secondary: mono } = themeCreator.palette;

const theme = createMuiTheme({
  palette: {
    primary: { main: "#F67B50" },
    secondary: { main: "#FBC490" },
    tertiary,
    mono,

*/
