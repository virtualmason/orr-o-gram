import { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { doesUsernameExist } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import { differenceInCalendarQuarters } from "date-fns";
export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [username, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignup = async (event) => {
    event.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        //authentication
        //»»»»»»emailAddress & password & usrname (display)
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });
        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("Tha user name already taken, plase try another");
    }
  };
  useEffect(() => {
    document.title = "Sign Up - Orr-O-Gram";
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex flex-col w-3/5">
        <img
          src="/images/iphone-with-profile.jpeg"
          alt="iphone with instagram pic"
        />
      </div>
      <div className="flex flex-col w-2/5 items-center bg-white p-4 border border-grat-primary mb-4">
        <div className="flex flex-col">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your username "
              type="text"
              placeholder="user name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                     border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUserName(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your Full Name"
              type="text"
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                     border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                     border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                     border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-10 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex mt-4 justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">Have an account? </p>
          <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
