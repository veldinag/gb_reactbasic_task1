import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Container} from "@material-ui/core";

import TopMenu from "./components/TopMenu";
import Routes from "./components/Routes";

import {persistor} from "./store";
import {chatsSelector, lastChatIdSelector} from "./store/chats/selectors";
import {getAuthStateFromFirebaseAction
} from "./store/authorization/actions";

import './App.css';
import 'typeface-roboto';
import {initChatsTrackingAction} from "./store/chats/actions";

function App() {
    const dispatch = useDispatch();
    const chats = useSelector(chatsSelector);
    const lastChatId = useSelector(lastChatIdSelector);
    const [chatId, setChatId] = useState(lastChatId);

    useEffect(() => {
        if (chats.length > 0) {
            if (!chatId) {
                setChatId(chats[0].id);
            } else {
                setChatId(lastChatId);
            }
        } else {
            setChatId("");
        }
    }, [lastChatId, chats, chatId]);

    useEffect(() => {
        dispatch(getAuthStateFromFirebaseAction());
        dispatch(initChatsTrackingAction());
    }, []);

    return (
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Container maxWidth="md">
                    <TopMenu lastChatId={lastChatId}/>
                    <Routes/>
                </ Container>
            </BrowserRouter>
        </PersistGate>
    )
}

export default App;
