import RecItemContext from "../../../contexts/custom/single-contexts/RecItemContext";
import useFirebaseListener from "../useFirestoreListener";

const useRecItemListener = () => {
  useFirebaseListener({
    useContext: RecItemContext.useContext,
    itemType: "recItem",
  });
};

export default useRecItemListener;
