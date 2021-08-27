import useCheckAuth from "./hooks/checkAuth";
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useCheckAuth();
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/dashboardLogin" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
