import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Home, TwoFA } from "..";

const ProtectedRoute = ({ component: Component, path, ...rest }: any) => {
  return (
    <Router>
      <Route
        path={path}
        render={(props) =>
          rest.auth.isLoggedIn ? (
            rest.auth.user ? (
              <Component {...props} />
            ) : (
              <>
                <Redirect to="/2fa" />
                <TwoFA />
              </>
            )
          ) : (
            <>
              <Redirect to="/home" />
              <Home />
            </>
          )
        }
        key={Math.random()}
      />
    </Router>
  );
};

export default ProtectedRoute;
