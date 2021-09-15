import React from "react";
import {Link} from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {ROUTES} from "../../constants";
import {useStyles} from "./style"

import AccountForm from "../AccountForm";
import {useSelector} from "react-redux";
import {pageSelector} from "../../store/pages/selectors";
import SignOut from "../SignOut/SignOut";
import {authStatusSelector} from "../../store/authorization/selectors";

const TopMenu = ({lastChatId}) => {
    const classes = useStyles();
    const page = useSelector(pageSelector);
    const authed = useSelector(authStatusSelector);

    return (
        <Paper className={classes.root}>
            <Tabs
                value={page}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab value={0} icon={<HomeIcon/>} to={ROUTES.HOME} component={Link}/>
                <Tab value={1} label="Chats" to={ROUTES.CHATS + "/" + lastChatId} component={Link}/>
                <Tab value={2} label="Profile" to={ROUTES.PROFILE} component={Link}/>
                <Tab value={3} label="Exchange rate" to={ROUTES.EXCHANGE} component={Link}/>
            </Tabs>
            <div className={classes.authorization}>
                {authed ? <SignOut /> :<AccountForm />}
            </div>
        </Paper>
    )
};

export default TopMenu;