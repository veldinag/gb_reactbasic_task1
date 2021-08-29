import React, { useCallback } from "react";
import { FormControlLabel, FormGroup, Paper, Switch, Typography } from "@material-ui/core";
import useStyles from "./style";

import { changeProfileCheckbox } from "../../store/profile/actions"
import { useDispatch, useSelector } from "react-redux";


const Profile = () => {
    const classes = useStyles();
    const { isChecked, message } = useSelector((state) => state)
    const dispatch = useDispatch()
    const setCheckbox = useCallback(() => {
        dispatch(changeProfileCheckbox)
    }, [dispatch])

    return (
        <Paper className={classes.root}>
            <Typography variant="h1" className={classes.heading}>Profile page</Typography>
            <FormGroup row>
                <FormControlLabel className={classes.switchBox} control={
                    <Switch
                        checked={isChecked}
                        onChange={setCheckbox}
                        name="checkbox"
                        color="primary"
                        />
                } label="Show message"
                />
            </FormGroup>
            {isChecked && <Typography variant="h4">{message}</Typography>}
        </Paper>
    )
}

export default Profile