import CustomerContext from "../single-contexts/CustomerContext";
import ProjectContext from "../single-contexts/ProjectContext";
import PrjCusLinkContext from "../single-contexts/PrjCusLinkContext";

const useCustomersOnProjectsContext = () => {
  const { items: customers } = CustomerContext.useContext();
  const { items: projects } = ProjectContext.useContext();
  const { items: prjCusLinks } = PrjCusLinkContext.useContext();

  const rtn = {};

  Object.entries(projects).forEach(([id, prj]) => (rtn[id] = { [id]: prj }));

  Object.entries(prjCusLinks).forEach(([id, pcl]) => {
    const prjId = pcl.pcl_prj_id;
    const cusId = pcl.pcl_cus_id;

    rtn[prjId][cusId] = customers[cusId];
  });

  return rtn;
};

export default useCustomersOnProjectsContext;
