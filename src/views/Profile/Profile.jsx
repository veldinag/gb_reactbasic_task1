import React, {useState, useCallback, useRef, useEffect} from "react";
import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import useStyles from "./style";

import {
    changeNameAction,
    getNameFromFirebaseProfileAction,
    setNameInFirebaseProfileAction
} from "../../store/profile/actions"
import {nameSelector} from "../../store/profile/selectors";
import {setPageAction} from "../../store/pages/actions";

export default function Profile() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const refInput = useRef(null);
    const userName = useSelector(nameSelector);
    const [value, setValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    const setName = useCallback(() => {
        dispatch(changeNameAction(value));
        dispatch(setNameInFirebaseProfileAction());
        setValue("");
        refInput.current.focus();
    }, [dispatch, value]);

    useEffect(() => {
        dispatch(setPageAction(2));
        dispatch(getNameFromFirebaseProfileAction());
    },[]);

    return (
        <Paper className={classes.root}>
            <Typography variant="h1" className={classes.heading}>Profile page</Typography>
            <Grid className={classes.inputForm}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}>
                <Grid item xs={3}>
                    <TextField variant="outlined"
                               fullWidth
                               inputRef={refInput}
                               autoFocus
                               size="small"
                               label="Your name"
                               value={value}
                               onChange={handleChange}/>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                            size="medium"
                            onClick={setName}>Change name
                    </Button>
                </Grid>
            </Grid>

            <Typography variant="h4">{(userName) && "Your name is  " + userName }</Typography>
        </Paper>
    )
}