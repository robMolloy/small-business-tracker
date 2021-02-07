import PrjCusLinkContext from "../../contexts/custom/single-contexts/PrjCusLinkContext";
import useFirebaseListener from "../useFirebaseListener";

const usePrjCusLinkListener = () => {
  useFirebaseListener({
    useContext: PrjCusLinkContext.useContext,
    itemType: "prjCusLink",
  });
};

export default usePrjCusLinkListener;
