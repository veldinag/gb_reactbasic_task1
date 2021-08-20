import './App.css';
import {useState} from 'react'
import getDate from "./utils";
import Message from "./components/Message";
import {Container, Button, TextField, Typography, Grid, Paper, makeStyles} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
    chatsList: {
        padding: theme.spacing(1),
        height: 500,
    },
    chat: {
        padding: theme.spacing(1),
        height: 500
    },
    sendForm: {
        marginTop: theme.spacing(1)
    },
    sendIcon: {
        marginLeft: 10
    }
}))

function App() {

    const [id, setId] = useState(1);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState([]);

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        if (author && text) {
            setMessageList([...messageList, {id, author, text, date: getDate()}]);
            setId(id + 1);
            setAuthor('');
            setText('');
        }
    }

    const classes = useStyles()

    return (
        <Container maxWidth="md">
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <Paper className={classes.chatsList}>Peoples</Paper>
                </Grid>
                <Grid item md={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper className={classes.chat}>{messageList.map((message) => <Message msg={message}
                                                                                                   key={message.id}/>)}</Paper>
                        </Grid>
                    </Grid>
                    <Grid className={classes.sendForm} container justifyContent="center" spacing={1}>
                        <Grid item xs={3}>
                            <TextField variant="outlined" size="small" label="Ваше имя"
                                       value={author} onChange={handleChangeAuthor}/>
                        </Grid>
                        <Grid item xs>
                            <TextField fullWidth variant="outlined" size="small" multiline label="Ваше сообщение"
                                       value={text} autoFocus onChange={handleChangeText}/>
                        </Grid>
                        <Grid item xs={2}>
                            <Button  fullWidth variant="outlined" onClick={handleClick}>SEND<SendIcon
                                className={classes.sendIcon} fontSize="small"/></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>);
}

export default App;
