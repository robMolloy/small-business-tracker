import Home from "./components/pages/Home";

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
