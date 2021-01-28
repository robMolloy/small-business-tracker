import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import danger from "@material-ui/core/colors/red";
import config from "../../../config";

const themeGenerator = (props = {}) => {
  let primary, secondary, tertiary, mono;
  ({ primary, secondary, tertiary, mono } = props);

  const tempTheme = createMuiTheme({
    palette: {
      primary: { main: tertiary },
      secondary: { main: mono },
    },
  });

  ({ primary: tertiary, secondary: mono } = tempTheme.palette);

  const theme = createMuiTheme({
    palette: {
      primary: { main: primary },
      secondary: { main: secondary },
      tertiary,
      mono,
    },
    status: { danger },
    ...config.theme,
  });

  const grey = theme.palette.grey;
  Object.assign(grey, { light: grey[200], main: grey[400], dark: grey[500] });

  window.theme = theme;
  return theme;
};

export default themeGenerator;
