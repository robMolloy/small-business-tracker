import ContactContext from "../../../contexts/custom/single-contexts/ContactContext";
import useFirebaseListener from "../useFirestoreListener";

const useContactListener = () => {
  useFirebaseListener({
    useContext: ContactContext.useContext,
    itemType: "contact",
  });
};

export default useContactListener;
