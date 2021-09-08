import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {CHATS, EXCHANGE, HOME, PROFILE} from "../../constants";
import {useStyles} from "../../style";

const TopMenu = ({lastChatId, page}) => {
    const [value, setValue] = useState(0)
    const classes = useStyles()

    /*const handleChange = (event, newValue) => {
        setValue(newValue)
        console.log(value)
    };*/

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}

                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab onClick={() => setValue(0)} label="Home" to={HOME} component={Link}/>
                <Tab onClick={() => setValue(1)} label="Chats" to={CHATS + "/" + lastChatId} component={Link}/>
                <Tab onClick={() => setValue(2)} label="Profile" to={PROFILE} component={Link}/>
                <Tab onClick={() => setValue(3)} label="Exchange rate" to={EXCHANGE} component={Link}/>
            </Tabs>
        </Paper>
    )
};

export default TopMenu;