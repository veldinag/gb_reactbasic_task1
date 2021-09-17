import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Typography} from "@material-ui/core";
import {messagesSelector} from "../../store/messages/selectors"
import Message from "../Message"
import "./MessageList.css"
import {initMessagesTrackingAction} from "../../store/messages/actions";


const MessageList = ({chatId}) => {
    const messages = useSelector(messagesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMessagesTrackingAction(chatId));
    }, [chatId]);

    if (chatId && messages[chatId]) {
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