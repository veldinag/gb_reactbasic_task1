import React from "react"
import {Paper, Typography} from "@material-ui/core"
import useStyles from "./style"

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