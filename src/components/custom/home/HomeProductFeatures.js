import React from "react";
import Text from "../../generic/text/Text";

const HomeProductFeatures = (props) => {
  const bulletProps = {
    gutterBottom: 0.5,
    fontWeight: "bold",
    before: "• ",
    indentLeft: 0,
    indentRight: 0,
  };
  return (
    <>
      <Text {...bulletProps}>Industry-standard login (oAuth)</Text>
      <Text {...bulletProps}>
        Built in React and does not use Redux (less bloat, easier to maintain)
      </Text>
      <Text {...bulletProps}>
        Works offline - once you're back online your changes will update
      </Text>
      <Text {...bulletProps}>
        Real-time updates (implemented with firestore)
      </Text>
      <Text {...{ ...bulletProps, gutterBottom: 3 }}>
        Suitable for use on multiple devices
      </Text>
    </>
  );
};

export default HomeProductFeatures;
