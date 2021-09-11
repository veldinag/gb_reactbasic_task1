import React from "react";
import { Route, Redirect } from "react-router-dom";
import {CHATS} from "../../constants";

const PublicRoute = ({authenticated, ...rest}) => {
    return !authenticated ? <Route {...rest} /> : <Redirect to={CHATS} />
}

export default PublicRoute;