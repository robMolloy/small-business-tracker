import React from "react";

import HomeProductFeatures from "./HomeProductFeatures";
import { makeStyles } from "@material-ui/core";
import Text from "../../generic/text/Text";

const HomeAboutTheProduct = () => {
  const classes = makeStyles(() => ({
    centered: {
      justifyContent: "center",
      display: "flex",
      margin: "0 24px",
    },
    innerContainer: {
      //
    },
  }))();

  return (
    <>
      <Text align="center" fontWeight="bold" gutterBottom={3}>
        This project is in development, but you can still get started by
        creating an account or signing in.
      </Text>
      <span className={classes.centered}>
        <span>
          <HomeProductFeatures />
        </span>
      </span>
      <Text align="center" fontWeight="bold" gutterBottom={0}>
        A number of features and finishing touches, both functional and
        aesthetic, will be coming very soon. Contact me at{" "}
        <a
          style={{
            borderBottom: "1px solid white",
            textDecoration: "none",
            color: "#ffffff",
          }}
          target="_blank"
          rel="noreferrer noopener"
          href="https://romolo.co.uk/home/#contactForm"
        >
          romolo.co.uk
        </a>{" "}
        to find out more!
      </Text>
    </>
  );
};

export default HomeAboutTheProduct;
