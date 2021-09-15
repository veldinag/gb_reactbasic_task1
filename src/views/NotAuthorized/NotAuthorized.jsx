import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Paper, Typography} from "@material-ui/core";
import useStyles from "./style";
import {setPageAction} from "../../store/pages/actions";

const NotAuthorized = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageAction(0));
  },[]);

  return (
    <Paper className={classes.root}>
      <div><Typography variant="h2">
        You don't have permission to view this page. Please log in.
      </Typography></div>
    </Paper>
  )
};

export default NotAuthorized;