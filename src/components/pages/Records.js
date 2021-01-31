import RecordMultform from "../custom/multiforms/RecordMultform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import RecordList from "../custom/lists/RecordList";

import RecordContext from "../../contexts/custom/single-contexts/RecordContext";
import Paper from "../generic/layouts/Paper";

const Records = () => {
  const { items } = RecordContext.useContext();

  return (
    <>
      <RecordMultform />

      <Section>
        <GridContainer>
          <RecordList values={items} Container={Paper} />
        </GridContainer>
      </Section>
    </>
  );
};

export default Records;
