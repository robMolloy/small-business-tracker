import RecItemContext from "../single-contexts/RecItemContext";
import RecordContext from "../single-contexts/RecordContext";

const useRecItemsOnRecordsContext = () => {
  const { items: recItems } = RecItemContext.useContext();
  const { items: records } = RecordContext.useContext();

  const rtn = {};

  Object.entries(records).forEach(([id, rec]) => (rtn[id] = { [id]: rec }));
  Object.entries(recItems).forEach(([id, rci]) => {
    const recId = rci.rci_rec_id;
    rtn[recId][id] = rci;
  });

  return rtn;
};

export default RecItemsOnRecords;
