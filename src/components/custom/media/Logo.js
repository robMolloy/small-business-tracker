import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from "@material-ui/styles/useTheme";

const Logo = (props = {}) => {
  let className, squeeze;
  ({ className = "", squeeze = -16 } = props);
  const theme = useTheme();
  // const {primary,secondary,tertiary} = theme.palette

  const classes = makeStyles(() => ({
    img: {
      height: "100%",
      width: "100%",
    },
    g: {
      height: "100%",
      // width: "100%",
    },
  }))();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`200 15 ${600 + squeeze * 5} 85`}
      version="1.1"
      fill={theme.palette.primary.main}
      className={`${className} ${classes.img}`}
    >
      <g transform={`translate(0 0)`}>
        <path d="M225 97 A40.838 40.838, 0, 0 1, 266.3 25.6 A55.275 55.275, 0, 0 0, 225 97 z" />
      </g>

      <g transform={`translate(${squeeze * 1} 0)`}>
        <path
          fill={theme.palette.secondary.main}
          d="M367.6 76.2 A40.838 40.838, 0, 0 1, 296.2 35 A55.275 55.275, 0, 0 0, 367.6 76.2 z"
        />
        <path
          fill={theme.palette.tertiary.main}
          d="M293.3 40 A40.838 40.838, 0, 0 1, 364.7 81.2 A55.275 55.275, 0, 0 0, 293.3 40 z"
        />
      </g>

      <g transform={`translate(${squeeze * 2} 0)`}>
        <path d="M427.1 29.8 L467.1 29.8 L447.1 44.8 z" />
        <path
          fill={theme.palette.tertiary.main}
          d="M434.6 27.8 A40.838 40.838, 0, 0 1, 479.5 97 A55.275 55.275, 0, 0 0, 434.6 27.8 z"
        />
        <path
          fill={theme.palette.secondary.main}
          d="M414.7 97 A40.838 40.838, 0, 0 1, 459.6 27.8 A55.275 55.275, 0, 0 0, 414.7 97 z"
        />
      </g>

      <g transform={`translate(${squeeze * 3} 0)`}>
        <path
          fill={theme.palette.secondary.main}
          d="M526.5 40 A40.838 40.838, 0, 0 1, 597.9 81.2 A55.275 55.275, 0, 0 0, 526.5 40 z"
        />
        <path
          fill={theme.palette.tertiary.main}
          d="M600.9 76.2 A40.838 40.838, 0, 0 1, 529.5 35 A55.275 55.275, 0, 0 0, 600.9 76.2 z"
        />
      </g>

      <g transform={`translate(${squeeze * 4} 0)`}>
        <path d="M691.65 90 A40.838 40.838, 0, 0 1, 650.4 18.6 A55.275 55.275, 0, 0 0, 691.65 90 z" />
      </g>

      <g transform={`translate(${squeeze * 5} 0)`}>
        <path
          fill={theme.palette.secondary.main}
          d="M793.6 76.2 A40.838 40.838, 0, 0 1, 722.2 35 A55.275 55.275, 0, 0 0, 793.6 76.2 z"
        />
        <path
          fill={theme.palette.tertiary.main}
          d="M719.15 40 A40.838 40.838, 0, 0 1, 790.6 81.2 A55.275 55.275, 0, 0 0, 719.15 40 z"
        />
      </g>
    </svg>
  );
};

export default Logo;
