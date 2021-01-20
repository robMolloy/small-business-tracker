import React from "react";
// import MUIGrid from "@material-ui/core/Grid";
import useTheme from "@material-ui/styles/useTheme";

const PhpLogo = (props = {}) => {
  let color;
  ({ color = "tertiary" } = props);

  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 841.9 595.3"
    >
      <g fill={theme.palette[color].main}>
        <ellipse
          cx="421"
          cy="298"
          rx="421"
          ry="225"
          fill={theme.palette[color].contrastText}
        />
        <g transform="translate(230 370) scale(15)">
          <text x="0" y="0" fill={theme.palette[color].main} fontStyle="italic">
            php
          </text>
        </g>
      </g>
    </svg>
  );
};

export default PhpLogo;
