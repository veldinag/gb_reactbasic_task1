import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Container} from "@material-ui/core";
import firebase from "firebase";

import TopMenu from "./components/TopMenu";
import Routes from "./components/Routes";

import {chatsSelector, lastChatIdSelector} from "./store/chats/selectors";
import {persistor} from "./store";
import {pageSelector} from "./store/pages/selectors";

import './App.css';
import 'typeface-roboto';

function App() {
  const chats = useSelector(chatsSelector);
  const lastChatId = useSelector(lastChatIdSelector);
  const [chatId, setChatId] = useState(lastChatId);
  const [authed, setAuthed] = useState(false);
  const page = useSelector(pageSelector);

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Container maxWidth="md">
          <TopMenu lastChatId={lastChatId} page={page} authed={authed}/>
          <Routes authed={authed}/>
        </ Container>
      </BrowserRouter>
    </PersistGate>
  )
}

export default App;
