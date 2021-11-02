import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getUserByUserId from "../../services/firebase.js";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./suggested-profile.js";

export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfiles();
    }
    console.log("profiles", profiles);
  }, [userId]);
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="front-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid fap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            useDocId={profile.docId}
            username={profile.username}
            profiledId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
