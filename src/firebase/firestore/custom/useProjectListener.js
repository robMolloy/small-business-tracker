import ProjectContext from "../../../contexts/custom/single-contexts/ProjectContext";
import useFirebaseListener from "../useFirestoreListener";

const useProjectListener = () => {
  useFirebaseListener({
    useContext: ProjectContext.useContext,
    itemType: "project",
  });
};

export default useProjectListener;
