import React from "react"
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import {lastChatIdSelector} from "../../store/chats/selectors"
import {CHATS} from "../../constants"

const RedirectChats = ({chatId}) => {
  const lastChatId = useSelector(lastChatIdSelector)
  if (chatId !== lastChatId) {
    return <Redirect to={CHATS + "/" + lastChatId}/>
  } else {
    return <div></div>
  }
}

export default RedirectChats