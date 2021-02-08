import CustomerContext from "../../../contexts/custom/single-contexts/CustomerContext";
import useFirebaseListener from "../useFirestoreListener";

const useCustomerListener = () => {
  useFirebaseListener({
    useContext: CustomerContext.useContext,
    itemType: "customer",
  });
};

export default useCustomerListener;
