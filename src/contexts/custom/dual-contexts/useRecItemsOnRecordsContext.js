import RecItemContext from "../single-contexts/RecItemContext";
import RecordContext from "../single-contexts/RecordContext";

const useRecItemsOnRecordsContext = () => {
  const { items: recItems } = RecItemContext.useContext();
  const { items: records } = RecordContext.useContext();

  const rtn = {};

  Object.entries(records).forEach(([id, rec]) => (rtn[id] = { [id]: rec }));
  Object.entries(recItems).forEach(([id, rci]) => {
    const recId = rci.rci_rec_id;
    if (rtn.hasOwnProperty(recId)) rtn[recId][id] = rci;
  });

  //
  return { items: rtn };
};

export default useRecItemsOnRecordsContext;
