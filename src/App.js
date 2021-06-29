import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Routes from "./constants/routes";
import useAuthListener from './hooks/use-auth-listener.js';
import userContext from './context/user';

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import('./pages/dashboard'));
const NotFound = lazy(() => import("./pages/not-found"))
const Header = lazy(() => import("./components/header"))

export default function App() {
  const { user } =  useAuthListener();
 
  
  return (
    <userContext.Provider value={user}>
    <Router >
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={Routes.LOGIN} component={Login} />
          <Route path={Routes.SIGN_UP} component={SignUp} />
          <Route path={Routes.DASHBOARD} component={Dashboard} />
          <Route path={Routes.NOT_FOUND} component={NotFound} />
          <Route path={Routes.HEADER} component={Header} />
        </Switch>
      </Suspense>
    </Router>
    </userContext.Provider>
  );
}

