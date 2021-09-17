import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Paper, Typography} from "@material-ui/core";
import useStyles from "./style";

import {setPageAction} from "../../store/pages/actions";

const NotFound = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setPageAction(0));
  }, [])

  return (
    <Paper className={classes.root}>
      <div><Typography variant="h1">404</Typography></div>
      <div><Typography variant="h2">Page not found</Typography></div>
    </Paper>
  )
}

export default NotFound;