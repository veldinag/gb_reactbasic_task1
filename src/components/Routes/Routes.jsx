import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../../views/Home";
import Chats from "../../views/Chats";
import Profile from "../../views/Profile";
import Exchange from "../../views/Exchange";
import NotAuthorized from "../../views/NotAuthorized";
import NotFound from "../../views/NotFound";
import PrivateRoute from "../../hocs/PrivateRoute";

import {ROUTES} from "../../constants";
import {useSelector} from "react-redux";
import {authStatusSelector} from "../../store/authorization/selectors";

const Routes = () => {
    const authed = useSelector(authStatusSelector);

  return (
    <Switch>
      <Route exact path={ROUTES.HOME}><Home/></Route>
      <PrivateRoute authenticated={authed} path={ROUTES.CHATS + ROUTES.CHAT_ID}><Chats/></PrivateRoute>
      <PrivateRoute authenticated={authed} path={ROUTES.PROFILE}><Profile/></PrivateRoute>
      <Route path={ROUTES.EXCHANGE}><Exchange/></Route>
      <Route path={ROUTES.NOT_AUTH}><NotAuthorized/></Route>
      <Route path="*"><NotFound/></Route>
    </Switch>
  )
};

export default Routes;
