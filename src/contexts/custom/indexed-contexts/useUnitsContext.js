import ProjectContext from "../single-contexts/ProjectContext";
import RecItemContext from "../single-contexts/RecItemContext";

const useUnitsContext = () => {
  let { items: projects } = ProjectContext.useContext();
  let { items: recItems } = RecItemContext.useContext();

  const rtn = {};

  Object.values(projects).forEach((item) => {
    const value = item.prj_default_unit;
    if (value !== "") rtn[value] = value;
  });

  Object.values(recItems).forEach((item) => {
    const value = item.rci_unit;
    if (value !== "") rtn[value] = value;
  });

  return { items: rtn };
};

export default useUnitsContext;
