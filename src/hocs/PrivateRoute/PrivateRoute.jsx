import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useDispatch} from "react-redux";

import {ROUTES} from "../../constants";
import {setPageAction} from "../../store/pages/actions";

const PrivateRoute = ({authenticated, ...rest}) => {

    const dispatch = useDispatch();
    const {path} = rest;

    if (path.includes(ROUTES.CHATS)) {
        dispatch(setPageAction(1));
    };
    if (path.includes(ROUTES.PROFILE)) {
        dispatch(setPageAction(2));
    };
    return authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.NOT_AUTH} />
}

export default PrivateRoute;