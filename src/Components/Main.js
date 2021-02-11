import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./tools/navbar";
import routes from "./Config/routes";
import { AuthProvider } from "./Context";
import AppRoutes from "./protectedRoutes/AppRoute";

const Main = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <br />
        <div className="pageContainer">
          <Switch>
            {routes.map((route) => (
              <AppRoutes
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
                exact={route.exact == undefined ? false : route.exact}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Main;
