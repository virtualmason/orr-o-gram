import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";
import User from "./user";
import React, { memo } from "react";

export default function Sidebar() {
  const {
    user: { docId, username, fullName, userId, following },
  } = useUser();
  console.log(docId);
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
Sidebar.wnyDidYouRender = true;
