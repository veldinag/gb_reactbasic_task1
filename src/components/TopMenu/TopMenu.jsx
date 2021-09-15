import React from "react";
import {Link} from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {ROUTES} from "../../constants";
import {useStyles} from "./style"

import AccountForm from "../AccountForm";

const TopMenu = ({lastChatId, page}) => {
  const classes = useStyles();

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
        <AccountForm />
      </div>
    </Paper>
  )
};

export default TopMenu;