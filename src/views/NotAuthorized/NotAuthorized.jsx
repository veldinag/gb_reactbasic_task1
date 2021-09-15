import React from "react";
import {Paper, Typography} from "@material-ui/core";
import useStyles from "./style";

const NotAuthorized = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h4">You do not have access.</Typography>
            <Typography variant="h4">To view this page please log in.</Typography>
        </Paper>
    )
};

export default NotAuthorized;