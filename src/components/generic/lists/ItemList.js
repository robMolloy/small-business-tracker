import React from "react";
import GridItem from "../../generic/grids/GridItem";

const ItemList = (props) => {
  let values, Container, Component;
  ({ values, Container = React.Fragment, Component } = props);

  return (
    <>
      {Object.entries(values).map(([id, item]) => (
        <GridItem key={id}>
          <Container>
            <Component values={item} />
          </Container>
        </GridItem>
      ))}
    </>
  );
};

export default ItemList;
