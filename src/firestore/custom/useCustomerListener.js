import CustomerContext from "../../contexts/custom/single-contexts/CustomerContext";
import useFirebaseListener from "../useFirebaseListener";

const useCustomerListener = () => {
  useFirebaseListener({
    useContext: CustomerContext.useContext,
    itemType: "customer",
  });
};

export default useCustomerListener;
