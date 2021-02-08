import PrjCusLinkContext from "../../../contexts/custom/single-contexts/PrjCusLinkContext";
import useFirebaseListener from "../useFirestoreListener";

const usePrjCusLinkListener = () => {
  useFirebaseListener({
    useContext: PrjCusLinkContext.useContext,
    itemType: "prjCusLink",
  });
};

export default usePrjCusLinkListener;
