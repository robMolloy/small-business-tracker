import React from "react";
// import MUIGrid from "@material-ui/core/Grid";
import useTheme from "@material-ui/styles/useTheme";

const SqlLogo = (props = {}) => {
  let color;
  ({ color = "tertiary" } = props);

  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 841.9 595.3"
    >
      <ellipse
        cx="421"
        cy="100"
        rx="250"
        ry="75"
        stroke={theme.palette[color].contrastText}
        strokeWidth={theme.spacing(3)}
        fill="none"
      />
      <ellipse
        cx="421"
        cy="500"
        rx="250"
        ry="75"
        fill={theme.palette[color].contrastText}
        stroke={theme.palette[color].contrastText}
        strokeWidth={theme.spacing(3)}
      />
      <line
        x1="171"
        y1="100"
        x2="171"
        y2="500"
        fill={theme.palette[color].contrastText}
        stroke={theme.palette[color].contrastText}
        strokeWidth={theme.spacing(3)}
      />
      <line
        x1="671"
        y1="100"
        x2="671"
        y2="500"
        fill={theme.palette[color].contrastText}
        stroke={theme.palette[color].contrastText}
        strokeWidth={theme.spacing(3)}
      />

      <g transform="translate(230 360) scale(12)">
        <text
          x="0"
          y="0"
          fill={theme.palette[color].contrastText}
          fontStyle="italic"
        >
          SQL
        </text>
      </g>
    </svg>
  );
};

export default SqlLogo;
