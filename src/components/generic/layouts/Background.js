import React from "react";
import { useTheme } from "@material-ui/core";

const Background = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Background;
