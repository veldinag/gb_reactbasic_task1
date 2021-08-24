import React from "react";
import {makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
});

const Profile = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h1">Profile page</Typography>
        </Paper>
    )
}

export default Profile