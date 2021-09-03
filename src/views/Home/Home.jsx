import React from "react"
import {Paper, Typography} from "@material-ui/core"
import useStyles from "./style"


const Home = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h1">Home page</Typography>
        </Paper>
    )
}

export default Home