import React from "react";
// import MUIGrid from "@material-ui/core/Grid";
import useTheme from "@material-ui/styles/useTheme";

const Es6Logo = (props = {}) => {
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
        <rect
          width="842"
          height="596"
          fill={theme.palette[color].contrastText}
        />
        <text
          x="20"
          y="35"
          transform="scale(15)"
          fill={theme.palette[color].main}
        >
          ES6
        </text>
      </g>
    </svg>
    // <svg height="300" width="300" viewBox="0 0 300 300" fill="white">
    // </svg>

    // <svg
    //   stroke={theme.palette[color].main}
    //   version="1.1"
    //   viewBox="0 0 297.45 435.877"
    //   {...props}
    // >
    //   <path
    //     fill="none"
    //     strokeWidth="8"
    //     d="M27.07,386.156 0,82.536 297.45,82.536 270.352,386.107 148.543,419.877 z"
    //   />
    //   {/* <polygon points="148.725,394.064 247.153,366.777 270.311,107.361 148.725,107.361 " /> */}
    //   <g>
    //     <polygon
    //       fill="#FFFFFF"
    //       points="148.93,209.97 148.93,247.207 194.783,257.207 190.461,305.5 148.93,316.711 148.93,355.453     225.27,334.295 225.828,328.004 235.486,229.97   "
    //     />
    //     <polygon
    //       fill="#FFFFFF"
    //       points="224.926,142.736 148.586,121.578 148.586,160.32 224.967,181.838   "
    //     />
    //   </g>
    //   <g>
    //     <polygon points="149.059,209.97 100.803,219.97 107.078,171.505 148.551,160.306 148.715,160.352      148.715,121.608 148.543,121.56 72.264,142.736 62.424,219.97 62.406,219.97 62.412,220.049 62.406,220.104 62.418,220.104      65.727,257.207 65.908,257.207 72.607,334.295 148.887,355.471 149.059,355.422 149.059,316.678 148.895,316.725      107.422,305.525 103.277,257.207 149.059,247.207    " />
    //   </g>
    //   <g>
    //     <polygon points="201.42,15.547 176.732,15.547 202.406,43.406 202.406,56.666 149.523,56.666 149.523,41.141    175.193,41.141 149.523,13.281 149.523,0 201.42,0  " />
    //     <polygon points="138.914,16.178 138.914,0 93.342,0 93.342,56.666 138.914,56.666 138.914,40.491 112.275,40.491    112.275,34.839 137.914,34.839 137.914,21.828 112.275,21.828 112.275,16.178  " />
    //   </g>
    // </svg>
  );
};

export default Es6Logo;
