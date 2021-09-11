import React from "react";
import {Link} from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {CHATS, EXCHANGE, HOME, LOGIN, LOGOUT, PROFILE, SIGNUP} from "../../constants";
import {useStyles} from "../../style";
import {Input, MeetingRoom, PersonAdd} from "@material-ui/icons";

const TopMenu = ({lastChatId, page}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Tabs
                value={page}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab value={0} icon={<HomeIcon />} to={HOME} component={Link}/>
                <Tab value={1} label="Chats" to={CHATS + "/" + lastChatId} component={Link}/>
                <Tab value={2} label="Profile" to={PROFILE} component={Link}/>
                <Tab value={3} label="Exchange rate" to={EXCHANGE} component={Link}/>
                <Tab value={4} icon={<Input />} to={LOGIN} component={Link}/>
                <Tab value={5} icon={<PersonAdd />} to={SIGNUP} component={Link}/>
                <Tab value={6} icon={<MeetingRoom />} to={LOGOUT} component={Link}/>
            </Tabs>
        </Paper>
    )
};

export default TopMenu;