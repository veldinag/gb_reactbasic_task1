import React from "react"
import {useSelector} from "react-redux"
import {Typography} from "@material-ui/core";
import {messagesSelector} from "../../store/messages/selectors"
import Message from "../Message"
import "./MessageList.css"


const MessageList = ({chatId}) => {
    const messages = useSelector(messagesSelector)
    if (chatId && messages.hasOwnProperty(chatId)) {
        const renderMessages = messages[chatId].map(item => <Message key={item.id} message={item}/>)
        return renderMessages
    } else {
        return (
            <div className="flex">
                <Typography variant="body1">
                    No messages
                </Typography>
            </div>
        )
    }
}

export default MessageList