import React from "react";
import db from "../../alt-config/firebase";
import useSession from "../auth/generic/useSession";
// import mightyStorage from "../../classes/mightyStorage";

const useFirebaseListener = (props) => {
  const { useContext, itemType } = props;
  const functions = useContext();

  const { uid } = useSession();

  const onlyFromCache = React.useRef(true);

  // React.useEffect(() => {
  //   console.log("check", uid);

  //   if (!uid) {
  //     console.log("pass", uid);
  //     mightyStorage
  //     window.localStorage.clear();
  //   }
  // }, [uid]);

  React.useEffect(() => {
    if (uid) {
      const unsubscribeListener = db
        .collection(`sbt_${itemType}`)
        .where("uid", "==", uid)
        .onSnapshot((snapshot) => {
          const stateChanges = { add: {}, remove: [] };

          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            const { doc } = change;

            if (change.type === "modified")
              stateChanges.add[doc.id] = doc.data();
            else if (change.type === "added")
              stateChanges.add[doc.id] = doc.data();
            else if (change.type === "removed")
              stateChanges.remove.push(doc.id);
          });

          const online = !snapshot.metadata.fromCache;
          const firstSuccess = onlyFromCache.current && online;

          // if (firstSuccess) console.log("first");

          if (firstSuccess) {
            functions.set(stateChanges.add);
            onlyFromCache.current = false;
          } else {
            functions.addRemoveState(stateChanges);
          }
        });

      return () => {
        unsubscribeListener();
        functions.set({});
      };
    }

    // eslint-disable-next-line
  }, [uid]);
};

export default useFirebaseListener;
