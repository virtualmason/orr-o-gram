import { useContext, useEffect } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Header() {
  //if usthentcate le them see the header  &&()
  const { firebase } = useContext(FirebaseContext);
  const user = useContext(UserContext);
  console.log("L-12: ", user);

  return (
    <header className="h-16 bg-white border-b border-gray mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="tex-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram">
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            <>
              {user ? (
                <>
                  <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    title="Sign Out"
                    onClick={() => firebase.auth().signOut()}
                  >
                    signOut
                  </button>
                </>
              ) : (
                <p>Log out</p>
              )}
            </>
          </div>
        </div>
      </div>
    </header>
  );
}
