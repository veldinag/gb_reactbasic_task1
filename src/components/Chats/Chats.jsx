import React, {useState, useRef, useEffect} from 'react'
import {Link, Redirect, useParams} from "react-router-dom";
import {Button, TextField, Grid, Paper, List, ListItem, ListItemText} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import getDate from "../../utils"
import Message from "../Message"
import DB from "../../DB/DB"
import {useStyles} from "./style";


function Chats() {

    const {chatId} = useParams()
    const currId = parseInt(chatId)
    const [chats, setChats] = useState(DB)
    const refInput = useRef(null)
    const [text, setText] = useState('')
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
            refInput.current.focus()

        }
    }

    const Chat = () => {
        if((!currId && chats.length) || (currId > chats.length) ) {
            return <Redirect to="/chats/1" />
        }
    }

    const SendForm = () => {
        if (currId && (currId <= chats.length)) {
            return (
                <Grid className={classes.sendForm} container justifyContent="center" spacing={1}>
                    <Grid item xs>
                        <TextField inputRef={refInput}
                                   fullWidth
                                   variant="outlined"
                                   size="small"
                                   label="Your message"
                                   value={text}
                                   onChange={handleChangeText}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className="classes.sendBtn"
                                fullWidth
                                variant="outlined"
                                onClick={handleClick}>SEND
                            <SendIcon
                                className={classes.sendIcon}
                                fontSize="small"/>
                        </Button>
                    </Grid>
                </Grid>
            )
        }
    }

    return (
        <>
            {Chat()}
            <Grid container spacing={1}>
                <Grid item md={3}>
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
                <Grid item md={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper variant="outlined" className={classes.chat}>
                                {messageList.map((message) => <Message msg={message} key={message.id}/>)}
                            </Paper>
                        </Grid>
                    </Grid>
                    {SendForm()}
                </Grid>
            </Grid>
        </>);
}

export default Chats;