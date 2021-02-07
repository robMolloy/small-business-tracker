import ContactContext from "../../contexts/custom/single-contexts/ContactContext";
import useFirebaseListener from "../useFirebaseListener";

const useContactListener = () => {
  useFirebaseListener({
    useContext: ContactContext.useContext,
    itemType: "contact",
  });
};

export default useContactListener;
