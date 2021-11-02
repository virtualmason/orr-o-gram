import { useState } from "react";
// import {
//   updatedLoggedInUserFollowing,
//   updatedFollowedUserFollowers,
// } from "../../services/firebase";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SuggestedProfile({
  userDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
  profiledId,
  getUserByUserId,
}) {
  console.log(username);
  const [followed, setFollowed] = useState(false);
  // const { setActiveUser } = useContext(LoggedInUserContext);

  async function handleFollowUser() {
    setFollowed(false);
    // await updatedLoggedInUserFollowing(loggedInUserDocId, profiledId, false);
    // await updatedFollowedUserFollowers(profileId, userId, false);
    const [user] = await getUserByUserId(userId);
    // setActiveUser(user);
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
          <p className="font-bold text-sm">'{username}'</p>
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
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string,
};
