import React from "react";
import { Route, Redirect } from "react-router-dom";
import {LOGIN} from "../../constants";

const PrivateRoute = ({authenticated, ...rest}) => {
    return authenticated ? <Route {...rest} /> : <Redirect to={{ pathname: LOGIN}} />
}

export default PrivateRoute;