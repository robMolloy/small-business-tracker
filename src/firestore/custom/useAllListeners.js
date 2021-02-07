import useCustomerListener from "./useCustomerListener";
import useContactListener from "./useContactListener";
import usePrjCusLinkListener from "./usePrjCusLinkListener";
import useProjectListener from "./useProjectListener";
import useRecItemListener from "./useRecItemListener";
import useRecordListener from "./useRecordListener";

const useAllListeners = () => {
  useCustomerListener();
  useContactListener();
  usePrjCusLinkListener();
  useProjectListener();
  useRecItemListener();
  useRecordListener();
};

export default useAllListeners;
