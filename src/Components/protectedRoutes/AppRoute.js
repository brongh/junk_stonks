import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../Context/context";

const AppRoutes = ({
  component: Component,
  path,
  isPrivate,
  exact,
  ...rest
}) => {
  const userDetails = useAuthState();
  //    if (isPrivate && !Boolean(userDetails.token)) {
  //       const conditions = false;
  //       if
  //    }
  // console.log(userDetails.userDetails.account_type);

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isPrivate && !Boolean(userDetails.token) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export default AppRoutes;
