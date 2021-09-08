import React, {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Paper, Typography, CircularProgress} from "@material-ui/core"
import {
  exchDataSelector,
  exchRequestErrorSelector,
  exchRequestStatusSelector
} from "../../store/exchange/selectors"
import {getExchangeRates} from "../../store/exchange/actions"

import useStyles from "./style"
import {STATUSES} from "../../store/exchange/constants";


const Exchange = () => {
  const dispatch = useDispatch()
  const data = useSelector(exchDataSelector)
  const error = useSelector(exchRequestErrorSelector)
  const status = useSelector(exchRequestStatusSelector)
  const classes = useStyles();

  const requestData = () => {
    dispatch(getExchangeRates())
  };

  useEffect(() => {
    requestData()
  }, []);

  const renderData = useCallback(
    (item) => <Typography key={item[0]} className={classes.item} variant="h2">
          {"1.0000 " + item[0] + " = " + (1 / item[1]).toFixed(2) + " " + data.base}
        </Typography>,
    [classes.item, data.base]
  );

  if (status === STATUSES.REQUEST) {
    return <Paper className={classes.root}><CircularProgress/></Paper>
  };

  if (error) {
    return (
      <Paper className={classes.root}>
        <Typography variant="h4">
          Data loading error {`(${error})`}
        </Typography>
      </Paper>
    )
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.heading} variant="h1">
        Exchange rates:
      </Typography>
      {Object.entries(data.rates).map(renderData)}
    </Paper>
  )
}

export default Exchange