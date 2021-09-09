import React from "react";
import {Link} from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {CHATS, EXCHANGE, HOME, PROFILE} from "../../constants";
import {useStyles} from "../../style";

const TopMenu = ({lastChatId, page}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Tabs
                value={page}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab value={HOME} label="Home" to={HOME} component={Link}/>
                <Tab value={CHATS} label="Chats" to={CHATS + "/" + lastChatId} component={Link}/>
                <Tab value={PROFILE} label="Profile" to={PROFILE} component={Link}/>
                <Tab value={EXCHANGE} label="Exchange rate" to={EXCHANGE} component={Link}/>
            </Tabs>
        </Paper>
    )
};

export default TopMenu;