import React from 'react'
import {useParams} from "react-router-dom"
import {Grid, Paper} from '@material-ui/core'
import MessageSendForm from "../../components/MessageSendForm";
import ChatsList from "../../components/ChatsList";
import {useStyles} from "./style"
import AddRemoveForm from "../../components/AddRemoveForm";
import ChatsRedirect from "../../components/ChatsRedirect";

function Chats() {

  const {chatId} = useParams()
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper variant="outlined" className={classes.chatsList}>
            <ChatsList chatId={chatId}/>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper variant="outlined" className={classes.chat}>

          </Paper>
        </Grid>
        <Grid item xs={3}>
          <AddRemoveForm chatId={chatId}/>
        </Grid>
        <MessageSendForm chatId={chatId}/>
      </Grid>
    </>)
}

export default Chats;