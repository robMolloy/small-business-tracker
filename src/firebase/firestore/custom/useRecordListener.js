import RecordContext from "../../../contexts/custom/single-contexts/RecordContext";
import useFirebaseListener from "../useFirestoreListener";

const useRecordListener = () => {
  useFirebaseListener({
    useContext: RecordContext.useContext,
    itemType: "record",
  });
};

export default useRecordListener;
