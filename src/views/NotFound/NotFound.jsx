import React from "react";
import {makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});

const NotFound = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div><Typography variant="h1">404</Typography></div>
            <div><Typography variant="h2">Page not found</Typography></div>
        </Paper>
    )
}

export default NotFound