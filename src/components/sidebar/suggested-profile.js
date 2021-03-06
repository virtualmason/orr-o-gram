import { useState } from "react";
import {
  updatedLoggedInUserFollowing,
  updatedFollowedUserFollowers,
} from "../../services/firebase";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    await updatedLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updatedFollowedUserFollowers(
      loggedInUserDocId,
      profileDocId,
      userId,
      false
    );
  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`images/avatars/${username}.jpg`}
          alt="profile pic"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div>
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={(e) => handleFollowUser(true)}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string,
};
