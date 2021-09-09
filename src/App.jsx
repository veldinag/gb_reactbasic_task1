import React, {useEffect, useState} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {useSelector} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {Container} from "@material-ui/core"

import Home from "./views/Home"
import Chats from "./views/Chats"
import Profile from "./views/Profile"
import Exchange from "./views/Exchange"
import NotFound from "./views/NotFound"
import {HOME, CHATS, PROFILE, EXCHANGE} from "./constants"
import {chatsSelector, lastChatIdSelector} from "./store/chats/selectors"
import {persistor} from "./store"

import './App.css'
import 'typeface-roboto'
import TopMenu from "./components/TopMenu";
import {pageSelector} from "./store/pages/selectors";

function App() {
    const chats = useSelector(chatsSelector);
    const lastChatId = useSelector(lastChatIdSelector);
    const [chatId, setChatId] = useState(lastChatId);
    const page = useSelector(pageSelector);

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
                    <TopMenu lastChatId={lastChatId} page={page}/>
                    <Switch>
                        <Route exact path={HOME}><Home/></Route>
                        <Route path={CHATS + "/:chatId?"}><Chats/></Route>
                        <Route path={PROFILE}><Profile/></Route>
                        <Route path={EXCHANGE}><Exchange/></Route>
                        <Route path="*"><NotFound/></Route>
                    </Switch>
                </ Container>
            </BrowserRouter>
        </PersistGate>

    )
}

export default App;
