import React, {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Paper, Typography, CircularProgress, Button} from "@material-ui/core"
import {
    exchDataSelector,
    exchRequestErrorSelector,
    exchRequestLoadingSelector
} from "../../store/exchange/selectors"
import {getExchangeRatesAction} from "../../store/exchange/actions"

import useStyles from "./style"


const Exchange = () => {
    const dispatch = useDispatch()
    const data = useSelector(exchDataSelector)
    const error = useSelector(exchRequestErrorSelector)
    const loading = useSelector(exchRequestLoadingSelector)
    const classes = useStyles();

    useEffect(() => {
        requestData();
    }, []);

    const requestData = () => {
        dispatch(getExchangeRatesAction())
    };

    const renderData = useCallback(
        (item) => <Typography key={item[0]} className={classes.item} variant="h2">
            {"1.0000 " + item[0] + " = " + (1 / item[1]).toFixed(2) + " " + data.base}
        </Typography>,
        [classes.item, data.base]
    );

    if (loading) {
        return <Paper className={classes.root}><CircularProgress/></Paper>
    }
    ;

    if (error) {
        return (
            <Paper className={classes.root}>
                <Typography variant="h4">
                    Data loading error
                </Typography>
                <Typography variant="h4">
                    {`(${error})`}
                </Typography>
                <Button className={classes.btn} variant="contained"
                        size="medium"
                        onClick={requestData}>Try again
                </Button>
            </Paper>
        )
    }
    ;

    return (
        <Paper className={classes.root}>
            <Typography className={classes.heading} variant="h1">
                Exchange rates:
            </Typography>
            {Object.entries(data["rates"]).map(renderData)}
        </Paper>
    )
}

export default Exchange