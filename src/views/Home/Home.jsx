import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Paper, Typography} from "@material-ui/core";
import useStyles from "./style";
import {setPageAction} from "../../store/pages/actions";
import {HOME} from "../../constants";



const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageAction(HOME));
  },[]);

  return (
    <Paper className={classes.root}>
      <Typography variant="h1">Home page</Typography>
    </Paper>
  )
}

export default Home