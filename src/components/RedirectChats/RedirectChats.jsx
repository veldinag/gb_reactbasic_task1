import React from "react"
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import {lastChatIdSelector} from "../../store/chats/selectors"
import {ROUTES} from "../../constants"

const RedirectChats = ({chatId}) => {
  const lastChatId = useSelector(lastChatIdSelector)
  if (chatId !== lastChatId) {
    return <Redirect to={ROUTES.CHATS + "/" + lastChatId}/>
  } else {
    return <div></div>
  }
}

export default RedirectChats