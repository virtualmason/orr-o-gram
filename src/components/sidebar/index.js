import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";
import User from "./user";
import React, { memo } from "react";

export default function Sidebar() {
  const {
    user: { username, fullName, userId },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
Sidebar.wnyDidYouRender = true;
