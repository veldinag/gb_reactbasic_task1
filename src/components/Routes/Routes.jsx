import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../../views/Home";
import Chats from "../../views/Chats";
import Profile from "../../views/Profile";
import Exchange from "../../views/Exchange";
import NotAuthorized from "../../views/NotAuthorized";
import NotFound from "../../views/NotFound";

import {ROUTES} from "../../constants";


const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}><Home/></Route>
      <Route path={ROUTES.CHATS + ROUTES.CHAT_ID}><Chats/></Route>
      <Route path={ROUTES.PROFILE}><Profile/></Route>
      <Route path={ROUTES.EXCHANGE}><Exchange/></Route>
      <Route path={ROUTES.NOT_AUTH}><NotAuthorized/></Route>
      <Route path="*"><NotFound/></Route>
    </Switch>
  )
};

export default Routes;
