import RecordMultform from "../custom/multiforms/RecordMultform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import RecordList from "../custom/lists/single-lists/RecordList";

import RecordContext from "../../contexts/custom/single-contexts/RecordContext";
import Paper from "../generic/layouts/Paper";

import useRecordsOnProjectsContext from "../../contexts/custom/dual-contexts/useRecordsOnProjectsContext";

const Records = () => {
  const { items } = RecordContext.useContext();
  console.log(useRecordsOnProjectsContext());

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
