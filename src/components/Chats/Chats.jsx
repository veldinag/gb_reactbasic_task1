import React, {useState, useRef, useEffect} from 'react'
import {Link, Redirect, useParams} from "react-router-dom";
import {Button, TextField, Grid, Paper, List, ListItem, ListItemText} from '@material-ui/core'
import getDate from "../../utils"
import Message from "../Message"
import DB from "../../DB/DB"
import {useStyles} from "./style";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import {AddCircle, RemoveCircle} from "@material-ui/icons";

function Chats() {

  const {chatId} = useParams()
  const currId = parseInt(chatId)
  const [chats, setChats] = useState(DB)
  const refInput = useRef(null)
  const nameInput = useRef(null)
  const [text, setText] = useState('')
  const [openAdd, setOpenAdd] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const classes = useStyles()

  const currentChat = (id) => {
    let current = []
    if (id && (id <= chats.length)) {
      current = chats.find(item => item.id === id).messages
    }
    return current
  }

  const [messageList, setMessageList] = useState(currentChat(currId))

  useEffect(() => {
    if (currId && (currId <= chats.length)) {
      refInput.current.focus()
      setMessageList(currentChat(currId))
    }
  }, [currId, currentChat])


  const handleChangeText = (event) => {
    setText(event.target.value)
  };

  const handleClick = () => {
    if (text) {
      const newMessage = {}
      newMessage.id = messageList.length + 1
      newMessage.type = 'fromMe'
      newMessage.text = text
      newMessage.date = getDate()[0] + ", " + getDate()[1]
      const newMessageList = messageList
      newMessageList.push(newMessage)
      setMessageList(newMessageList)
      const newChats = chats
      newChats.map(item => {
        if (item.id === currId) {
          item.messages = messageList
        }
      })
      setChats(newChats)
      setText('')
    }
  }

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  }

  const handleClickOpenRemove = () => {
    setOpenRemove(true);
  }

  const handleCloseAdd = () => {
    setOpenAdd(false);
  }

  const handleCloseRemove = () => {
    setOpenRemove(false);
  }

  const handleAddNewChat = () => {
    const textFieldName = nameInput.current
    const newChat = {}
    let findId = 0
    let isFind = 0
    do {
      findId++
      isFind = chats.findIndex(item => item.id === findId)
    } while(isFind !== -1)
    newChat.id = findId
    newChat.name = textFieldName.value
    newChat.messages = []
    const newChats = chats
    newChats.push(newChat)
    setChats(newChats)
    console.log(chats)
    handleCloseAdd()
  }

  const handleRemoveChat = () => {
    const index = chats.findIndex(item => item.id === currId)
    const newChats = chats
    newChats.splice(index, 1)
    setChats(newChats)
    handleCloseRemove()
  }

  const Chat = () => {
    if ((!currId && chats.length) || (currId > chats.length)) {
      return <Redirect to="/chats/1"/>
    }
  }

  const SendForm = () => {
    if (currId && (currId <= chats.length)) {
      return (
        <Grid item xs={9}>
          <Grid container spacing={1}>
            <Grid item xs>
              <TextField inputRef={refInput}
                         fullWidth
                         variant="outlined"
                         size="small"
                         label="Your message"
                         value={text}
                         onChange={handleChangeText}/>
            </Grid>
            <Grid item>
              <Button variant="contained"
                      size="medium"
                      endIcon={<Icon>send</Icon>}
                      onClick={handleClick}>SEND
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )
    }
  }

  return (
    <>
      {Chat()}
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper variant="outlined" className={classes.chatsList}>
            <List component="nav">
              {chats.map(chatItem => (
                <ListItem
                  button
                  to={"/chats/" + chatItem.id.toString()}
                  component={Link}
                  key={chatItem.id}
                  selected={(currId === chatItem.id)}>
                  <ListItemText>{chatItem.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={9}>

          <Paper variant="outlined" className={classes.chat}>
            {messageList.map((message) => <Message msg={message} key={message.id}/>)}
          </Paper>

        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1}>
            <Grid item>
              <div>
                <IconButton onClick={handleClickOpenAdd}>
                  <AddCircle color="primary"/>
                </IconButton>
                <Dialog open={openAdd} onClose={handleCloseAdd}>
                  <DialogTitle>Add new chat</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please write user's name
                    </DialogContentText>
                    <TextField
                      inputRef={nameInput}
                      variant="outlined"
                      margin="dense"
                      label="Name"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseAdd} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleAddNewChat} color="primary">
                      Add
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
            <Grid item>
              <div>
                <IconButton onClick={handleClickOpenRemove}>
                  <RemoveCircle color="secondary"/>
                </IconButton>
                <Dialog open={openRemove} onClose={handleCloseRemove}>
                  <DialogTitle>Delete chat</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Are you sure you want to delete the chat with name
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>

                    <Button onClick={handleCloseRemove} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleRemoveChat} color="primary">
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {SendForm()}
      </Grid>
    </>);
}

export default Chats;