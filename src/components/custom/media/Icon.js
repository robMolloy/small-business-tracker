import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from "@material-ui/styles/useTheme";

const Logo = (props = {}) => {
  let className;
  ({ className = "" } = props);
  const theme = useTheme();

  const classes = makeStyles(() => ({
    img: {
      height: "100%",
      width: "100%",
    },
  }))();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="185 3 110 110"
      version="1.1"
      className={`${className} ${classes.img}`}
    >
      <circle cx="240" cy="58" r="50" fill={theme.palette.primary.main} />
      <g fill={theme.palette.secondary.main} strokeWidth="0">
        <path d="M225 97 A40.838 40.838, 0, 0 1, 266.3 25.6 A55.275 55.275, 0, 0 0, 225 97 z" />
      </g>
    </svg>
  );
};

export default Logo;
