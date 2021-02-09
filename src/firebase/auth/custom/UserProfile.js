import React from "react";
import useSession from "../generic/useSession";

function UserProfile() {
  const user = useSession();

  return (
    <>
      <div>Hello, {JSON.stringify(user?.uid ?? "noone")}</div>
    </>
  );
}
export default UserProfile;
