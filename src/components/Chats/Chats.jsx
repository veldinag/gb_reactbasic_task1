import {useState, useRef} from 'react'
import getDate from "../../utils"
import Message from "../Message"
import {Button, TextField, Grid, Paper, makeStyles, List, ListItem} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    chatsList: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        height: 500,
    },
    chat: {
        padding: theme.spacing(1),
        height: 500,
        overflow: "scroll"
    },
    sendForm: {
        marginTop: theme.spacing(1)
    },
    sendBtn: {
        height: 100
    },
    sendIcon: {
        marginLeft: 10
    }
}))

function Chats() {

    const [id, setId] = useState(1)
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')
    const [messageList, setMessageList] = useState([])
    const [chatsList, setChatsList] = useState([
        {id: 1, name: "Ivan"},
        {id: 2, name: "Jhon"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Elena"},
        {id: 5, name: "Alex"}
    ])
    const refInput = useRef(null)

    const classes = useStyles()

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const handleChangeText = (event) => {
        setText(event.target.value)
    };

    const handleClick = () => {
        if (author && text) {
            setMessageList([...messageList, {id, author, text, date: getDate()}])
            setId(id + 1)
            setAuthor('')
            setText('')
            refInput.current.focus()
        }
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <Paper variant="outlined" className={classes.chatsList}>
                        <List component="nav">
                            {chatsList.map(chatItem =>
                                <ListItem
                                    button
                                    key={chatItem.id}
                                    to={"chats/" + chatItem.id}
                                    component={Link}>
                                    {chatItem.name}
                                </ListItem>)}
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
                    <Grid className={classes.sendForm} container justifyContent="center" spacing={1}>
                        <Grid item xs={3}>
                            <TextField variant="outlined"
                                       size="small"
                                       label="Your name"
                                       value={author}
                                       onChange={handleChangeAuthor}/>
                        </Grid>
                        <Grid item xs>
                            <TextField inputRef={refInput}
                                       fullWidth
                                       variant="outlined"
                                       size="small"
                                       label="Your message"
                                       value={text}
                                       autoFocus
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
                </Grid>
            </Grid>
        </>);
}

export default Chats;