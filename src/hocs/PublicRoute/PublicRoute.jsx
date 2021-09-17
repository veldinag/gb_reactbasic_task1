import React from "react";
import { Route, Redirect } from "react-router-dom";
import {ROUTES} from "../../constants";

const PublicRoute = ({authenticated, ...rest}) => {
    return !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.NOT_AUTH} />
}

export default PublicRoute;