import React from "react";
import db from "../alt-config/firebase";

const useFirebaseListener = (props) => {
  const { useContext, itemType } = props;
  const functions = useContext();

  const onlyFromCache = React.useRef(true);

  React.useEffect(() => {
    db.collection(`sbt_${itemType}`).onSnapshot((snapshot) => {
      const stateChanges = { add: {}, remove: [] };

      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        const { doc } = change;

        if (change.type === "modified") stateChanges.add[doc.id] = doc.data();
        else if (change.type === "added") stateChanges.add[doc.id] = doc.data();
        else if (change.type === "removed") stateChanges.remove.push(doc.id);
      });

      const online = !snapshot.metadata.fromCache;
      const firstSuccess = onlyFromCache.current && online;

      if (firstSuccess) {
        functions.set(stateChanges.add);
        onlyFromCache.current = false;
      } else {
        functions.addRemoveState(stateChanges);
      }
    });
    // eslint-disable-next-line
  }, []);
};

export default useFirebaseListener;
