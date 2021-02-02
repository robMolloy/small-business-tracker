import React from "react";

import RecordMultform from "../custom/multiforms/RecordMultform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";

import useRecordsOnProjectsContext from "../../contexts/custom/dual-contexts/useRecordsOnProjectsContext";
import RecordsOnProjectsList from "../custom/lists/dual-lists/RecordsOnProjectsList";
import RecItemsOnRecordsList from "../custom/lists/dual-lists/RecItemsOnRecordsList";
import useRecItemsOnRecordsContext from "../../contexts/custom/dual-contexts/useRecItemsOnRecordsContext";
import ButtonRow from "../generic/grids/ButtonRow";
import Button from "../generic/buttons/Button";

const Records = () => {
  const { items: recordsOnProjects } = useRecordsOnProjectsContext();
  const { items: recItemsOnRecords } = useRecItemsOnRecordsContext();

  const [sort, setSort] = React.useState(0);

  return (
    <>
      <Section>
        <RecordMultform />
      </Section>

      <Section>
        <ButtonRow
          array={[
            <Button
              color={sort === 0 ? "secondary" : "default"}
              onClick={() => setSort(0)}
            >
              Project
            </Button>,
            <Button
              color={sort === 1 ? "secondary" : "default"}
              onClick={() => setSort(1)}
            >
              Record
            </Button>,
          ]}
        />
      </Section>

      <Section>
        <GridContainer>
          {sort === 0 && <RecordsOnProjectsList values={recordsOnProjects} />}
          {sort === 1 && <RecItemsOnRecordsList values={recItemsOnRecords} />}
        </GridContainer>
      </Section>
    </>
  );
};

export default Records;
