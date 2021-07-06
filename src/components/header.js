import { useContext, useEffect } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
// import logOut from '/images/logout.svg'
// import { ReactElement as logOut } from '/images/logout.svg'
// import "../styles/header.css";
export default function Header() {
  //if usthentcate le them see the header  &&()
  const { firebase } = useContext(FirebaseContext);
  const user = useContext(UserContext);
  // const LogOut =() => {

  //   (
  //     <logOut height='200px' width='500px' />

  //   )
  // }
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
          <div className="text-gray-700 text-center flex items-center ">
            <>
              {user ? (
                <>
                  <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                    <svg
                      width="200px"
                      height="200px"
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      className="heroicon-home heroicon heroicon-sm"
                    >
                      <path
                        className="heroicon-home-wall heroicon-component-fill"
                        fill="#FFFFFF"
                        d="M37 53V33H23v20H5V30L30 5l25 25v23H37zm-7-30a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM10 33v12H9v3h12v-3h-1V33H10zm30 0v12h-1v3h12v-3h-1V33H40z"
                      ></path>
                      <polygon
                        className="heroicon-home-roof heroicon-component-accent heroicon-component-fill"
                        fill="#7ACFC0"
                        points="0 30 5 25 5 4 26 4 30 0 34 4 55 4 55 25 60 30 57 33 30 6 3 33"
                      ></polygon>
                      <path
                        className="heroicon-home-frames heroicon-component-accent heroicon-component-fill"
                        fill="#7ACFC0"
                        d="M35 53h2V33H23v20h2V35h10v18zm-5-30a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM10 33h10v12h1v3H9v-3h1V33zm30 0h10v12h1v3H39v-3h1V33zm-28 2v11h6V35h-6zm30 0v11h6V35h-6zM30 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      ></path>
                      <rect
                        className="heroicon-home-door heroicon-component-accent heroicon-component-fill"
                        width="10"
                        height="18"
                        x="25"
                        y="35"
                        fill="#7ACFC0"
                      ></rect>
                      <path
                        className="heroicon-home-windows heroicon-component-fill"
                        fill="#FFFFFF"
                        d="M12 35h6v11h-6V35zm30 0h6v11h-6V35zM30 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                      ></path>
                      <rect
                        className="heroicon-home-parging heroicon-component-fill"
                        width="50"
                        height="7"
                        x="5"
                        y="53"
                        fill="#FFFFFF"
                      ></rect>
                      <path
                        className="heroicon-shadows"
                        fill="#000000"
                        d="M5 30L30 5l25 25v3L30 8 5 33v-3zm4 18h12v1H9v-1zm30 0h12v1H39v-1z"
                        opacity=".2"
                      ></path>
                      <path
                        className="heroicon-outline"
                        fill="#4A4A4A"
                        fill-rule="nonzero"
                        d="M55 58h5v2H0v-2h5V31l-1.3 1.3-.7.7-.7-.7-1.6-1.6L0 30l.7-.7L5 25V4h21L29.3.7 30 0l.7.7L34 4h21v21l4.3 4.3.7.7-.7.7-1.6 1.6-.7.7-.7-.7L55 31v27zM30.7 6.7L30 6l-.7.7L11 25h38L30.7 6.7zM7 29v23h16V33h14v19h16V29l-3-3H10l-3 3zm46-18V9h-4V8h2V7h1v1h1V6H36l2 2h3V7h1v1h2v1h-5l5 5h1v-1h1v1h4v1h-5l8 8V12h-7v-1h2v-1h1v1h4zM7 6v2h2V7h1v1h3v1H7v5h2v-1h1v1h4v1H7v8l11-11h-8v-1h2v-1h1v1h5v-1h1v1l5-5H7zM3 31.59l26.3-26.3.7-.7.7.7L57 31.6 58.59 30 30 1.41 1.41 30 3 31.59zM19 58v-3h2v-2H7v5h12zm20 0v-1H21v1h18zm14 0v-5H39v2h2v3h12zm-17-6V34H24v18h1V35h10v17h1zM26 36v16h8V36h-8zm11 18H23v1h14v-1zm-7-31a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm4-5a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 34v-1h10v12h1v3H9v-3h1V34zm9 0h-8v11h1V35h6v10h1V34zm-6 11h4v-4h-4v4zm4-5v-4h-4v4h4zm2 6h-9v1h10v-1h-1zm21-1V33h10v12h1v3H39v-3h1zm9-11h-8v11h1V35h6v10h1V34zm-2 6v-4h-4v4h4zm3 6H40v1h10v-1zm-3-1v-4h-4v4h4zm-18 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2-2v-6h2v1h-1v5h-1zm0 5v-1h6v1h-5v3h-1v-3zm6-11v1h-1v5h-1v-6h2z"
                      ></path>
                    </svg>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                    </svg> */}
                  </Link>
                  <button
                    type="button"
                    title="Sign Out"
                    onClick={() => firebase.auth().signOut()}
                    onKeyDown={(event) => {
                      if (event.key === "Event") {
                        firebase.auth().signOut();
                      }
                    }}
                  >
                    <svg
                      height="50"
                      width="50"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center cursor-pointer">
                    <Link to={`/p${user.displaName}`}>
                      <img
                        className="rounded-full h-8 w-8 flex"
                        src={`/images/avatars/${user.displayName}.jpeg`}
                        alt={`${user.displayName} profile picture`}
                      />
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to={ROUTES.LOGIN}>
                    <button type="button" className="bg-blue-500 p-2 text-sm text-white rounded">
                      Log In
                    </button>
                  </Link>
                  <Link to={ROUTES.SIGN_UP}>
                    <button className="p-2 text-sm" type="button>">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </header>
  );
}
