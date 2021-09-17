import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";

import Home from "../../views/Home";
import Chats from "../../views/Chats";
import Profile from "../../views/Profile";
import Exchange from "../../views/Exchange";
import NotAuthorized from "../../views/NotAuthorized";
import NotFound from "../../views/NotFound";
import PrivateRoute from "../../hocs/PrivateRoute";

import {ROUTES} from "../../constants";

import {authErrorSelector, authIsAuthorizedSelector, authStatusSelector} from "../../store/authorization/selectors";
import AuthAlert from "../AuthAlert";
import {setAuthResetAction} from "../../store/authorization/actions";

const Routes = () => {
  const dispatch = useDispatch();
  const authed = useSelector(authIsAuthorizedSelector);
  const status = useSelector(authStatusSelector);
  const error = useSelector(authErrorSelector);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (status || error) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        dispatch(setAuthResetAction());
      },3000);
      return () => clearTimeout(timer);
    }
  }, [status, error])

  return (
    <>
      <Switch>
        <Route exact path={ROUTES.HOME}><Home/></Route>
        <PrivateRoute authenticated={authed} path={ROUTES.CHATS + ROUTES.CHAT_ID}><Chats/></PrivateRoute>
        <PrivateRoute authenticated={authed} path={ROUTES.PROFILE}><Profile/></PrivateRoute>
        <Route path={ROUTES.EXCHANGE}><Exchange/></Route>
        <Route path={ROUTES.NOT_AUTH}><NotAuthorized/></Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
      <AuthAlert status={status} error={error} show={showAlert} />
    </>
  )
};

export default Routes;
