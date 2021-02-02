import RecordContext from "../single-contexts/RecordContext";
import ProjectContext from "../single-contexts/ProjectContext";

const useRecordsOnProjectsContext = () => {
  const { items: records } = RecordContext.useContext();
  const { items: projects } = ProjectContext.useContext();

  const rtn = {};

  Object.entries(projects).forEach(([id, prj]) => (rtn[id] = { [id]: prj }));
  Object.entries(records).forEach(([id, rec]) => {
    const prjId = rec.rec_prj_id;
    rtn[prjId][id] = rec;
  });

  return { items: rtn };
};

export default useRecordsOnProjectsContext;
