import React, {useState, useRef, useEffect} from 'react'
import {Link, Redirect, useParams} from "react-router-dom"
import {Button, TextField, Grid, Paper,
        List, ListItem, ListItemText,
        Dialog, DialogTitle, DialogContent,
        DialogContentText, DialogActions} from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton"
import {AddCircle, RemoveCircle} from "@material-ui/icons"
import Icon from "@material-ui/core/Icon"

import getDate from "../../utils"
import Message from "../Message"
import DB from "../../DB/DB"
import {useStyles} from "./style"

function Chats() {

    const textInput = useRef(null)
    const nameInput = useRef(null)

    const [chats, setChats] = useState(DB)

    const {chatIdStr} = useParams()

    const chatId = (!parseInt(chatIdStr) ||
        (chats.findIndex(el => el.id === parseInt(chatIdStr)) === -1))
        ? 1 : parseInt(chatIdStr)

    const currentChat = (id) => {
        if (!chats) {
            return {}
        } else {
            const index = chats.findIndex(el => el.id === id)
            if (index !== -1) {
                return chats[index]
            }
        }
    }

    const [chat, setChat] = useState(currentChat(chatId))

    const [messages, setMessages] = useState(chat.messages)
    const [message, setMessage] = useState('')

    const [openAdd, setOpenAdd] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);

    const classes = useStyles()

    useEffect(() => {
        textInput.current.focus()
        setChat(currentChat(chatId))
        setMessages(chat.messages)

    }, [chatId])


    const handleChangeText = (event) => {
        setMessage(event.target.value)
    };

    const handleClick = () => {
        if (message) {
            const newMessage = {}
            newMessage.id = messages.length + 1
            newMessage.type = 'fromMe'
            newMessage.text = message
            newMessage.date = getDate()[0] + ", " + getDate()[1]
            const newMessages = messages
            newMessages.push(newMessage)
            setMessages(newMessages)
            const newChats = chats
            newChats.map(item => {
                if (item.id === chatId) {
                    item.messages = messages
                }
            })
            setChats(newChats)
            setMessage('')
            textInput.current.focus()
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
        } while (isFind !== -1)
        newChat.id = findId
        newChat.name = textFieldName.value
        newChat.messages = []
        const newChats = chats
        newChats.push(newChat)
        setChats(newChats)
        handleCloseAdd()
    }

    const handleRemoveChat = () => {
        const index = chats.findIndex(item => item.id === chatId)
        const newChats = chats
        newChats.splice(index, 1)
        setChats(newChats)
        handleCloseRemove()
    }

    const Chat = () => {
        //if ((!chatId && chats.length) || (chatId > chats.length)) {
        return <Redirect to="/chats/1"/>
        //}
    }

    const SendForm = () => {
        if (chatId && (chatId <= chats.length)) {
            return (
                <Grid item xs={9}>
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <TextField inputRef={textInput}
                                       fullWidth
                                       variant="outlined"
                                       size="small"
                                       label="Your message"
                                       value={message}
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
                                    selected={(chatId === chatItem.id)}>
                                    <ListItemText>{chatItem.name}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={9}>

                    <Paper variant="outlined" className={classes.chat}>
                        {messages.map((message) => <Message msg={message} key={message.id}/>)}
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