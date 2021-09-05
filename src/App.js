import React, {useEffect, useState} from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import {useSelector} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {Container, Paper, Tab, Tabs} from "@material-ui/core"

import Home from "./views/Home"
import Chats from "./views/Chats"
import Profile from "./views/Profile"
import NotFound from "./views/NotFound"
import {useStyles} from "./style"
import {HOME, CHATS, PROFILE} from "./constants"
import {chatsSelector, lastChatIdSelector} from "./store/chats/selectors"
import {persistor} from "./store"

import './App.css'
import 'typeface-roboto'

function App() {

    const classes = useStyles()
    const chats = useSelector(chatsSelector)
    const lastChatId = useSelector(lastChatIdSelector)
    const [value, setValue] = useState(0)
    const [chatId, setChatId] = useState(lastChatId)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    useEffect(() => {
        if (chats.length > 0) {
            if (!chatId) {
                setChatId(chats[0].id)
            } else {
                setChatId(lastChatId)
            }
        } else {
            setChatId("")
        }
    }, [lastChatId, chats, chatId])

    return (
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Container maxWidth="md">
                    <Paper className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                            <Tab label="Home" to={HOME} component={Link}/>
                            <Tab label="Chats" to={CHATS + "/" + lastChatId} component={Link}/>
                            <Tab label="Profile" to={PROFILE} component={Link}/>
                        </Tabs>
                    </Paper>
                    <Switch>
                        <Route exact path={HOME}><Home/></Route>
                        <Route path={CHATS + "/:chatId?"}><Chats/></Route>
                        <Route path={PROFILE}><Profile/></Route>
                        <Route path="*"><NotFound/></Route>
                    </Switch>
                </ Container>
            </BrowserRouter>
        </PersistGate>

    )
}

export default App;
