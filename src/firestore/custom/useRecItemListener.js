import RecItemContext from "../../contexts/custom/single-contexts/RecItemContext";
import useFirebaseListener from "../useFirebaseListener";

const useRecItemListener = () => {
  useFirebaseListener({
    useContext: RecItemContext.useContext,
    itemType: "recItem",
  });
};

export default useRecItemListener;
