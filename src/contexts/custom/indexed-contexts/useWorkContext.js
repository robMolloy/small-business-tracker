import ProjectContext from "../single-contexts/ProjectContext";
import RecItemContext from "../single-contexts/RecItemContext";

const useWorkContext = () => {
  let { items: projects } = ProjectContext.useContext();
  let { items: recItems } = RecItemContext.useContext();

  const rtn = {};

  Object.values(projects).forEach(
    (item) => (rtn[item.prj_default_work] = item.prj_default_work)
  );

  Object.values(recItems).forEach(
    (item) => (rtn[item.rci_work] = item.rci_work)
  );

  return { items: rtn };
};

export default useWorkContext;
