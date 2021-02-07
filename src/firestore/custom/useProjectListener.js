import ProjectContext from "../../contexts/custom/single-contexts/ProjectContext";
import useFirebaseListener from "../useFirebaseListener";

const useProjectListener = () => {
  useFirebaseListener({
    useContext: ProjectContext.useContext,
    itemType: "project",
  });
};

export default useProjectListener;
