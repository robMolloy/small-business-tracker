import React from "react";
import GridItem from "../../generic/grids/GridItem";
import Accordion from "../layouts/Accordion";
import GridContainer from "../grids/GridContainer";

const DualItemList = (props) => {
  let values, Container, SummaryComponent, DetailsComponent;
  ({
    values,
    Container = React.Fragment,
    SummaryComponent,
    DetailsComponent,
  } = props);

  return (
    <>
      {Object.entries(values).map(([id, group]) => {
        let summaryItem;
        ({ [id]: summaryItem, ...group } = group);

        const displayItems = group;

        return (
          <GridItem key={id}>
            <Container>
              <Accordion summary={<SummaryComponent values={summaryItem} />}>
                <GridContainer>
                  <DetailsComponent type="grid" values={displayItems} />
                </GridContainer>
              </Accordion>
            </Container>
          </GridItem>
        );
      })}
    </>
  );
};

export default DualItemList;
