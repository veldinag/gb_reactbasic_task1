import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Paper, Typography, LinearProgress} from "@material-ui/core"
import {
  curExchRatesSelector,
  exchRequestErrorSelector,
  exchRequestLoadingSelector
} from "../../store/exchange/selectors"
import {getExchangeRates} from "../../store/exchange/actions"

import useStyles from "./style"


const Exchange = () => {
  const dispatch = useDispatch()
  const currExchRates = useSelector(curExchRatesSelector)
  const error = useSelector(exchRequestErrorSelector)
  const loading = useSelector(exchRequestLoadingSelector)
  const classes = useStyles();

  const requestData = () => {
    dispatch(getExchangeRates())
  }

  useEffect(() => {
    requestData()
  }, [])

  const RenderCurrExchangeRates = ({data, error, loading}) => {

    if (loading) {
      return <LinearProgress/>
    }

    if (error) {
      return (
        <Typography variant="h4">
          Data loading error {`(${error})`}
        </Typography>
      )
    }

    return [(
      <Typography className={classes.heading} variant="h1">
        Exchange rates:
      </Typography>
    ), Object.entries(data.rates).map(item => {
        return (
          <Typography className={classes.item} variant="h2">
            {"1.0000 " + item[0] + " = " + (1 / item[1]).toFixed(2) + " " + data.base}
          </Typography>
        )
      }
    )]
  }

  return (
    <Paper className={classes.root}>
      <RenderCurrExchangeRates
        data={currExchRates}
        error={error}
        loading={loading}
      />
    </Paper>
  )
}

export default Exchange