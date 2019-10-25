import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFoundContainer from "../containers/NotFoundContainer";
import HomeContainer from "../containers/HomeContainer";
import ProfileContainer from "../containers/ProfileContainer";
import MenuBarContainer from "../containers/MenuBarContainer";
export const history = createBrowserHistory();

const AppRouter = props => {
  return (
    <Router history={history}>
      <div>
          <MenuBarContainer/>
        <Switch>
          <Route path="/" component={HomeContainer} exact={true} />
          <Route path="/:id" component={ProfileContainer} exact={true} />
          <Route component={NotFoundContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
